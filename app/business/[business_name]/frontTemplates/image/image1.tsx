"use client";
import { StorageComponentsType } from "@/app/dashboard/drag/DropArea/type";
import React, { FC, useState } from "react";

type ComponentInfoType = {
  data: StorageComponentsType;
};

const Image1: FC<ComponentInfoType> = ({ data }) => {
  const { url, image } = data.image || { image: "", url: "" };
  return (
    <div className="w-full aspect-[4/1] relative group px-5 mb-4 ">
      <img
        alt="Banner"
        src={image}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default Image1;
