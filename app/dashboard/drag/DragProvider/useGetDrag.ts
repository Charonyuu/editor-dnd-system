import { tempBoxs } from "@/components/templates";
import { ComponentInfoType, StorageComponentsType } from "@/components/type";
import { APIURL } from "@/constant";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useGetDrag() {
  const [components, setComponents] = useState<ComponentInfoType[]>([]);

  useEffect(() => {
    async function getDrags() {
      const { data } = await axios(`${APIURL}/getDrags`, {
        withCredentials: true,
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
  return { components, setComponents };
}
