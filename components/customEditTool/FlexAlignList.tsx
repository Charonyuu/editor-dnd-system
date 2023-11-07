import React from "react";
import { BsTextCenter, BsTextLeft, BsTextRight } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

type Props = {
  type: string;
  currentValue: string;
  handleChange: (type: string, value: string) => void;
};

export default function FlexAlignList({
  type,
  currentValue,
  handleChange,
}: Props) {
  return (
    <div className="flex items-center">
      <div
        className={twMerge(
          " p-1 mr-2 rounded-md cursor-pointer",
          currentValue === "flex-start"
            ? "bg-gray-500 "
            : "bg-gray-300 hover:bg-gray-500"
        )}
        onClick={() => handleChange(type, "flex-start")}
      >
        <BsTextLeft className="text-[20px]" />
      </div>
      <div
        className={twMerge(
          " p-1 mr-2 rounded-md cursor-pointer",
          currentValue === "center"
            ? "bg-gray-500 "
            : "bg-gray-300 hover:bg-gray-500"
        )}
        onClick={() => handleChange(type, "center")}
      >
        <BsTextCenter className="text-[20px]" />
      </div>
      <div
        className={twMerge(
          " p-1 mr-2 rounded-md cursor-pointer",
          currentValue === "flex-end"
            ? "bg-gray-500 "
            : "bg-gray-300 hover:bg-gray-500"
        )}
        onClick={() => handleChange(type, "flex-end")}
      >
        <BsTextRight className="text-[20px]" />
      </div>
    </div>
  );
}
