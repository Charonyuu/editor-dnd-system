// 網頁banner 滿版橫幅

import Image from "next/image";
import React, { FC, useLayoutEffect, useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { TempContainerProps } from "../../../../../Types/type";
import { useDragContext } from "../../DragProvider";
import PictureCrop from "@/components/PictureCrop";
import ImageEditModal from "./imageEditModal";
import { ImageType } from "@/Types/imageType";
import ImageType1 from "@/components/Drags/Images/ImageType1";

const Image1: FC<TempContainerProps> = ({ id, ComponentData }) => {
  const { components, setComponents } = useDragContext();
  const originalDataRef = useRef<ImageType[]>(
    ComponentData?.images || [
      {
        id: Date.now(),
        img: "",
        url: "",
        title: "",
        textAlign: "",
      },
    ]
  );
  const [data, setData] = useState<ImageType[]>(originalDataRef.current);

  function onComplete() {
    originalDataRef.current = data;
    setComponents((prev) => {
      const temp = [...prev];
      const index = temp.findIndex((ele) => ele.id === id);
      temp[index] = {
        ...temp[index],
        images: data,
      };
      // temp[index] = URL.createObjectURL(file);
      return temp;
    }); //
  }
  function onCancel() {
    setData(originalDataRef.current);
  }

  return (
    <div className="w-full relative group px-5">
      <ImageType1 data={data} />
      <ImageEditModal
        id={id}
        data={data}
        onCancel={onCancel}
        onComplete={onComplete}
        setData={setData}
      />
    </div>
  );
};

export default Image1;
