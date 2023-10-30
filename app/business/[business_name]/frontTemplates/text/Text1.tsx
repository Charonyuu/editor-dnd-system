import React, { FC } from "react";
import { StorageComponentsType } from "@/app/dashboard/drag/DropArea/type";

type ComponentInfoType = {
  data: StorageComponentsType;
};

const Text1: FC<ComponentInfoType> = ({ data }) => {
  const textType = data.textType?.[0] || {
    title: "標題",
    titleColor: "#FFFFFF",
    content: ["內文...."],
    contentColor: "#FFFFFF",
    animation: "",
    textAlign: "left",
  };

  const { textAlign, titleColor, title, contentColor, content } = textType;

  return (
    <div
      className="w-full relative group px-5 py-1 mb-5"
      style={{ textAlign: textAlign }}
    >
      <p style={{ color: titleColor }}>{title}</p>
      <div style={{ color: contentColor }}>
        {content?.map((text, index) => (
          <p key={index}>{text || "\u00A0"}</p>
        ))}
      </div>
    </div>
  );
};
export default Text1;
