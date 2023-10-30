"use client";

import React, { FC } from "react";
import { FrontTempBoxs } from "./frontTemplates";
import useGetDragsByName from "./useGetDragsByName";
import { StorageComponentsType } from "@/app/dashboard/drag/DropArea/type";

const Preview: FC = () => {
  const { components, bgColor } = useGetDragsByName();

  if (components.length === 0) return <p>404 No found</p>;
  return (
    <div className="w-full min-h-screen relative" style={{ backgroundColor: bgColor }}>
      {components.map((data: StorageComponentsType) => {
        const Component =
          FrontTempBoxs[data.type as keyof typeof FrontTempBoxs];
        return <Component data={data} key={data.id} />;
      })}
    </div>
  );
};
export default Preview;
