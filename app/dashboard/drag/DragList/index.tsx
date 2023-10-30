"use client";

import DraggableComponent from "./DraggableComponent";
import React, { FC, useState } from "react";
import { BsImageFill, BsInboxes, BsStack, BsCardText } from "react-icons/bs";
import "./index.css";
import { twMerge } from "tailwind-merge";
import { tempImageList, tempImageListType, templateListType } from "./template";

const DraggableList: FC = () => {
  const handleDragStart = (e: React.DragEvent, CompType: string) => {
    e.dataTransfer.setData("component_type", CompType);
  };
  const [select, setSelected] = useState<keyof tempImageListType>("header");

  return (
    <div className="max-w-[400px] h-[80vh] fixed top-1/2 -translate-y-1/2 right-0 py-4 px-2  rounded-md bg-white border border-solid border-black dark:bg-black dark:border-white">
      <div className="flex items-center overscroll-x-auto">
        {/* header,footer */}
        <div
          onClick={() => setSelected("header")}
          className={twMerge(
            "optionButton",
            select === "header"
              ? "border-blue-400 dark:border-blue-400 text-blue-400"
              : "border-black dark:border-white text-black dark:text-white"
          )}
        >
          <BsInboxes />
          <p className="mt-1">導覽列</p>
        </div>
        {/* image list, banner   */}
        <div
          onClick={() => setSelected("image")}
          className={twMerge(
            "optionButton",
            select === "image"
              ? "border-blue-400 dark:border-blue-400 text-blue-400"
              : "border-black dark:border-white text-black dark:text-white"
          )}
        >
          <BsImageFill />
          <p className="mt-1">圖片</p>
        </div>
        <div
          onClick={() => setSelected("text")}
          className={twMerge(
            "optionButton",
            select === "text"
              ? "border-blue-400 dark:border-blue-400 text-blue-400"
              : "border-black dark:border-white text-black dark:text-white"
          )}
        >
          <BsCardText />
          <p className="mt-1">文字</p>
        </div>
        {/* contact, map , video ,  */}
        <div
          onClick={() => setSelected("common")}
          className={twMerge(
            "optionButton",
            select === "common"
              ? "border-blue-400 dark:border-blue-400 text-blue-400"
              : "border-black dark:border-white text-black dark:text-white"
          )}
        >
          <BsStack />
          <p className="mt-1">常見</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2">
        {tempImageList[select].map((data: templateListType) => (
          <DraggableComponent
            key={data.type}
            data={data}
            onDragStart={handleDragStart}
          />
        ))}
      </div>
    </div>
  );
};

export default DraggableList;
