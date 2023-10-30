import { tempBoxs } from "@/app/dashboard/drag/DropArea/templates";
import { StorageComponentsType } from "@/app/dashboard/drag/DropArea/type";
import { APIURL } from "@/constant";
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function useGetDragsByName() {
  const [components, setComponents] = useState<StorageComponentsType[]>([]);
  const [bgColor, setBgColor] = useState("#FFFFFF");

  const pathname = usePathname();
  const name = pathname.split("/business/")[1];

  useEffect(() => {
    async function getDrags() {
      try {
        const { data } = await axios.post(`${APIURL}/getDragsByName`, {
          name,
        });
        const { bgColor: fetchedBgColor, drags } = data;

        const transformedComponents = drags.map(
          (ele: StorageComponentsType) => ({
            ...ele,
            component: tempBoxs[ele.type as keyof typeof tempBoxs],
          })
        );

        setComponents(transformedComponents);
        setBgColor(fetchedBgColor);
      } catch (error) {
        console.error("Error fetching drags:", error);
        // 考慮設置某些UI提醒用戶發生了錯誤
      }
    }
    getDrags();
  }, []);
  return { components, bgColor };
}
