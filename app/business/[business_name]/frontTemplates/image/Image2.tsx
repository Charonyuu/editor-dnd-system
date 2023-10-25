// 網頁banner 滿版橫幅
"use client";
import { StorageComponentsType } from "@/app/dashboard/drag/DropArea/type";
import React, { FC, useState } from "react";

type ComponentInfoType = {
  data: StorageComponentsType;
};



const Image2: FC<ComponentInfoType> = ({ data }) => {
  const images = data.images || [
    { image: "", url: "" },
    { image: "", url: "" },
  ];
  return (
    <div className="w-full flex items-center justify-between relative  px-5 mb-4">
      <div className="w-[48%] relative group">
        <img
          alt="halfBanner"
          src={images[0].image || "/defaultImage/testbanner.webp"}
          className="w-full aspect-[2/1] object-cover rounded-lg "
        />
      </div>
      <div className="w-[48%] relative group">
        <img
          alt="halfBanner"
          src={images[1].image || "/defaultImage/testbanner.webp"}
          className="w-full aspect-[2/1] object-cover rounded-lg "
        />
      </div>
    </div>
  );
};

export default Image2;
