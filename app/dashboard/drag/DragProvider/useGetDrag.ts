import { APIURL } from "@/constant";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { tempBoxs } from "../DropArea/templates";
import { ComponentInfoType, StorageComponentsType } from "../DropArea/type";

export default function useGetDrag() {
  const [components, setComponents] = useState<ComponentInfoType[]>([]);
  const [bgColor, setBgColor] = useState("#FFFFFF");
  useEffect(() => {
    async function fetchDrags() {
      try {
        const { data } = await axios(`${APIURL}/getDrags`, {
          withCredentials: true,
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

    fetchDrags();
  }, []);

  return { components, bgColor, setComponents, setBgColor };
}
