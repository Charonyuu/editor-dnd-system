import React from "react";
import { TbEdit } from "react-icons/tb";
import useOption from "./useOption";
import {
  AiFillDelete,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiCopy } from "react-icons/bi";

type CompToolProps = {
  id: number;
  openModal: () => void;
};

export default function DragItemOptions({ id, openModal }: CompToolProps) {
  const {
    handleSortUp,
    handleSortDown,
    handleDelete,
    handleCopy,
    CanMoveUp,
    CanMoveDown,
  } = useOption(id);
  return (
    <div className="group-hover:flex absolute top-0 left-0 hidden bg-black bg-opacity-40 items-center justify-center w-full h-full">
      <div
        className="flex items-center flex-col text-white p-1 rounded-lg mx-2 cursor-pointer"
        onClick={openModal}
      >
        <TbEdit fontSize="20px" />
        <p>編輯</p>
      </div>
      <div
        className="flex items-center flex-col text-white p-1 rounded-lg mx-2 cursor-pointer"
        onClick={openModal}
      >
        <AiOutlineSetting fontSize="20px" />
        <p>設定</p>
      </div>
      {CanMoveUp ? (
        <div
          className="flex items-center flex-col text-white p-1 rounded-lg mx-2 cursor-pointer"
          onClick={handleSortUp}
        >
          <AiOutlineArrowUp color="white" fontSize="20px" />
          <p>往上</p>
        </div>
      ) : null}
      {CanMoveDown ? (
        <div
          className="flex items-center flex-col text-white p-1 rounded-lg mx-2 cursor-pointer"
          onClick={handleSortDown}
        >
          <AiOutlineArrowDown color="white" fontSize="20px" />
          <p>往下</p>
        </div>
      ) : null}
      <div
        className="flex items-center flex-col text-white p-1 rounded-lg mx-2 cursor-pointer"
        onClick={handleCopy}
      >
        <BiCopy color="white" fontSize="20px" />
        <p>複製</p>
      </div>
      <div
        className="flex items-center flex-col text-red-600 p-1 rounded-lg mx-2 cursor-pointer"
        onClick={handleDelete}
      >
        <AiFillDelete color="red" fontSize="20px" />
        <p>刪除</p>
      </div>
    </div>
  );
}
