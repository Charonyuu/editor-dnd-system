// 網頁banner 滿版橫幅

import Image from "next/image";
import React, { FC, useLayoutEffect, useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { TempContainerProps } from "../type";
import { useDragContext } from "../../DragProvider";
import PictureCrop from "@/components/PictureCrop";

const Image1: FC<TempContainerProps> = ({ id }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { components, setComponents } = useDragContext();
  const [file, setFile] = useState<File | string>("");

  useLayoutEffect(() => {
    const data = components.find((ele) => ele.id === id);
    if (!data) return setFile("/defaultImage/testbanner.webp");
    if (data.image) {
      setFile(data.image.image);
    }
  }, []);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;
  //   if (files) {
  //     const file = files[0]; // Convert FileList to File[]
  //     setFile(URL.createObjectURL(file));
  //     setComponents((prev) => {
  //       const temp = [...prev];
  //       console.log(temp);
  //       const index = temp.findIndex((ele) => ele.id === id);
  //       temp[index] = {
  //         ...temp[index],
  //         image: { id: Date.now().toString(), image: file },
  //       };
  //       // temp[index] = URL.createObjectURL(file);
  //       return temp;
  //     }); // Now setImage expects File[] which is what we are giving
  //   }
  // };

  function onComplete(file: string) {
    setFile(file);
    setComponents((prev) => {
      const temp = [...prev];
      console.log(temp);
      const index = temp.findIndex((ele) => ele.id === id);
      temp[index] = {
        ...temp[index],
        image: { id: Date.now().toString(), image: file },
      };
      // temp[index] = URL.createObjectURL(file);
      return temp;
    }); //
  }

  const image = typeof file !== "string" ? URL.createObjectURL(file) : file;

  return (
    <div className="w-full aspect-[4/1] relative group px-5">
      <img alt="Banner" src={image} className="w-full h-full object-cover " />
      <PictureCrop aspectRatio={4 / 1} onComplete={onComplete} />
    </div>
  );
};

export default Image1;
