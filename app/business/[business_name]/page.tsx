import React, { FC } from "react";
import { FrontTempBoxs } from "./frontTemplates";
import { StorageComponentsType } from "@/Types/type";
import getPage from "./getPage";

const Preview: FC = async () => {
  const { components, bgColor } = await getPage();

  return (
    <div
      className="w-full min-h-screen relative"
      style={{ backgroundColor: bgColor }}
    >
      {components.map((data: StorageComponentsType) => {
        const Component =
          FrontTempBoxs[data.type as keyof typeof FrontTempBoxs];
        return (
          <div
            className="w-full relative group"
            key={data.id}
            style={{
              padding: `${data.setting.paddingY}px ${data.setting.paddingX}px`,
              width: data.setting.width + "%",
              alignItems: data.setting.align,
              backgroundColor: data.setting.bgColor,
              // animation
            }}
          >
            <Component data={data} />
          </div>
        );
      })}
    </div>
  );
};
export default Preview;
