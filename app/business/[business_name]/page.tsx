"use client";

import { ComponentInfoType, StorageComponentsType } from "@/components/type";
import { usePathname, useRouter } from "next/navigation";
import React, { FC } from "react";
import { FrontTempBoxs } from "./frontTemplates";
import useGetDragsByName from "./useGetDragsByName";

const Preview: FC = () => {
  const { components } = useGetDragsByName();

  if (components.length === 0) return <p>404 No found</p>;
  return (
    <div className="w-full h-screen bg-black relative">
      {components.map((data: StorageComponentsType) => {
        const Component =
          FrontTempBoxs[data.type as keyof typeof FrontTempBoxs];
        return <Component data={data} key={data.id} />;
      })}
    </div>
  );
};
export default Preview;
