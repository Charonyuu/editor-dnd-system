import React from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineClose,
} from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { useDragContext } from "../DragProvider";
import { ComponentInfoType } from "./type";

type CompToolProps = {
  id: number;
};

export default function CompTool({ id }: CompToolProps) {
  const { components, setComponents } = useDragContext();

  const Index = components.findIndex((item) => item.id === id);

  function handleSortUp(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    setComponents((prev: ComponentInfoType[]) => {
      const newIndex = Index - 1;
      if (newIndex < 0) return prev; // 索引小於0，不作任何變動

      const newComponents = [...prev];
      [newComponents[Index], newComponents[newIndex]] = [
        newComponents[newIndex],
        newComponents[Index],
      ];
      return newComponents;
    });
  }

  function handleSortDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    setComponents((prev: ComponentInfoType[]) => {
      const newIndex = Index + 1;
      if (newIndex >= prev.length) return prev; // 索引大於等於components的長度，不作任何變動

      const newComponents = [...prev];
      [newComponents[Index], newComponents[newIndex]] = [
        newComponents[newIndex],
        newComponents[Index],
      ];
      return newComponents;
    });
  }

  function handleDelete(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    setComponents((prev: ComponentInfoType[]) => {
      const temp = prev.filter((item) => item.id !== id);
      return temp;
    });
  }
  function handleCopy() {
    console.log("copy");
  }

  return (
    <div className="bg-gray-400 w-8 h-[100px] flex items-center flex-col">
      <div
        className="flex items-center justify-center p-1 rounded-lg mr-2 cursor-pointer"
        onClick={(e) => handleDelete(e)}
      >
        <AiOutlineClose color="white" fontSize="14px" />
      </div>
      {Index > 0 ? (
        <div
          className="flex items-center justify-center p-1 rounded-lg mr-2 cursor-pointer"
          onClick={(e) => handleSortUp(e)}
        >
          <AiOutlineArrowUp color="white" fontSize="14px" />
        </div>
      ) : null}
      {Index < components.length - 1 ? (
        <div
          className="flex items-center justify-center p-1 rounded-lg mr-2 cursor-pointer"
          onClick={(e) => handleSortDown(e)}
        >
          <AiOutlineArrowDown color="white" fontSize="14px" />
        </div>
      ) : null}
      <div
        className="flex items-center justify-center p-1 rounded-lg mr-2 cursor-pointer"
        onClick={handleCopy}
      >
        <BiCopy color="white" fontSize="14px" />
      </div>
    </div>
  );
}
