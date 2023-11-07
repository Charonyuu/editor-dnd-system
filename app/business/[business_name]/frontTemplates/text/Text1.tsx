import React, { FC } from "react";
import { StorageComponentsType } from "@/Types/type";
import TextType1 from "@/components/Drags/Text/TextType";

type ComponentInfoType = {
  data: StorageComponentsType;
};

const Text1: FC<ComponentInfoType> = ({ data }) => {
  const textType = data.textType?.[0] || {
    text: "",
    textAlign: "left",
  };

  return (
    <div className="w-full relative group px-5 py-1 mb-5">
      <TextType1 data={textType} />
    </div>
  );
};
export default Text1;
