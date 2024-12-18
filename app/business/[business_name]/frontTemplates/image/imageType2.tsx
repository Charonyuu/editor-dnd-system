// 網頁banner 滿版橫幅
"use client";
import { StorageComponentsType } from "@/Types/type";
import React, { FC, useState } from "react";

type ComponentInfoType = {
  data: StorageComponentsType;
};

const Image2: FC<ComponentInfoType> = ({ data }) => {
  const images = data.images || [
    { img: "", url: "" },
    { img: "", url: "" },
  ];
  return (
    <div className="w-full flex items-center justify-between relative  px-5 mb-5">
      <div className="w-[48%] relative group">
        <img
          alt="halfBanner"
          src={images[0].img || "/defaultImage/testbanner.webp"}
          className="w-full aspect-[1.5] object-cover rounded-lg "
        />
      </div>
      <div className="w-[48%] relative group">
        <img
          alt="halfBanner"
          src={images[1].img || "/defaultImage/testbanner.webp"}
          className="w-full aspect-[1.5] object-cover rounded-lg "
        />
      </div>
    </div>
  );
};

export default Image2;
