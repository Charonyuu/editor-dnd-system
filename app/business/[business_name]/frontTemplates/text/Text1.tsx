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

  return <TextType1 data={textType} />;
};
export default Text1;
