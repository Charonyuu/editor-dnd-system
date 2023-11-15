import { StorageComponentsType } from "@/Types/type";
import ImageType1 from "@/components/Drags/Images/ImageType1";
import React, { FC } from "react";

type ComponentInfoType = {
  data: StorageComponentsType;
};

const Image1: FC<ComponentInfoType> = ({ data }) => {
  const { images } = data;
  return <ImageType1 data={images!} />;
};

export default Image1;
