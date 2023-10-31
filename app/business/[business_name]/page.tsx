"use client";

import React, { FC } from "react";
import { FrontTempBoxs } from "./frontTemplates";
import useGetDragsByName from "./useGetDragsByName";
import { StorageComponentsType } from "@/Types/type";

const Preview: FC = () => {
  const { components, bgColor } = useGetDragsByName();

  if (components.length === 0) return <p>404 No found</p>;
  return (
    <div
      className="w-full min-h-screen relative px-5"
      style={{ backgroundColor: bgColor }}
    >
      {components.map((data: StorageComponentsType) => {
        const Component =
          FrontTempBoxs[data.type as keyof typeof FrontTempBoxs];
        return (
          <div className="w-full relative group mb-5 ">
            <Component data={data} key={data.id} />
          </div>
        );
      })}
    </div>
  );
};
export default Preview;
