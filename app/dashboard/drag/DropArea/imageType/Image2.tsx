// 網頁banner 滿版橫幅

import Image from "next/image";
import React, { FC, useLayoutEffect, useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { TempContainerProps, imageType } from "../type";
import { useDragContext } from "../../DragProvider";
import PictureCrop from "@/components/PictureCrop";

const Image2: FC<TempContainerProps> = ({ id }) => {
  console.log(id);
  const [file, setFile] = useState<imageType[]>([
    { url: "", image: "", id: "0" },
    { url: "", image: "", id: "0" },
  ]);
  const { components, setComponents } = useDragContext();

  useLayoutEffect(() => {
    const data = components.find((ele) => ele.id === id);
    if (!data)
      return setFile([
        { url: "", image: "/defaultImage/testbanner.webp", id: "0" },
        { url: "", image: "/defaultImage/testbanner.webp", id: "0" },
      ]);
    if (data.images) setFile(data.images);
  }, []);

  function onComplete(image: string, index: number) {
    const temp = [...file];
    temp[index] = { ...temp[index], image };
    setFile(temp);
    setComponents((prev) => {
      const componentsTemp = [...prev];
      console.log(componentsTemp);
      const index = componentsTemp.findIndex((ele) => ele.id === id);
      componentsTemp[index] = { ...componentsTemp[index], images: temp };
      return componentsTemp;
    });
  }
  console.log(components);

  return (
    <div className="w-full flex items-center justify-between relative  px-5">
      <div className="w-[48%] relative group">
        <img
          alt="halfBanner"
          src={file[0].image}
          className="w-full aspect-[2/1] object-cover "
        />
        <PictureCrop
          aspectRatio={1.5}
          onComplete={(image) => onComplete(image, 0)}
        />
      </div>
      <div className="w-[48%] relative group">
        <img
          alt="halfBanner"
          src={file[1].image}
          className="w-full aspect-[2/1] object-cover "
        />
        <PictureCrop
          aspectRatio={1.5}
          onComplete={(image) => onComplete(image, 1)}
        />
      </div>
    </div>
  );
};

export default Image2;
