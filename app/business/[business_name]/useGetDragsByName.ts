import { tempBoxs } from "@/app/dashboard/drag/DropArea/templates";
import { StorageComponentsType } from "@/app/dashboard/drag/DropArea/type";
import { APIURL } from "@/constant";
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function useGetDragsByName() {
  const [components, setComponents] = useState<StorageComponentsType[]>([]);
  const pathname = usePathname();
  const name = pathname.split("/business/")[1];

  useEffect(() => {
    async function getDrags() {
      const { data } = await axios.post(`${APIURL}/getDragsByName`, {
        name,
      });
      const SaveResult = data.map((ele: StorageComponentsType) => {
        return {
          ...ele,
          component: tempBoxs[ele.type as keyof typeof tempBoxs],
        };
      });
      setComponents(SaveResult);
    }
    getDrags();
  }, []);
  return { components };
}
