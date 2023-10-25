import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  selectedColor: string;
  setColor: (color: string) => void;
};

export default function ColorChooser({ selectedColor, setColor }: Props) {
  const colors = [
    "#FF0000", // 紅色
    "#FFA500", // 橙色
    "#FFFF00", // 黃色
    "#008000", // 綠色
    "#0000FF", // 藍色
    "#4B0082", // 靛色
    "#800080", // 紫色
    "#000000", // 黑色
    "#FFFFFF", // 白色
  ];
  return (
    <div className="flex items-center">
      {colors.map((color) => (
        <div
          className={twMerge(
            "h-6 w-6 rounded-full mr-1 cursor-pointer my-2",
            selectedColor === color
              ? "border border-[#D0D0D0] border-solid"
              : ""
          )}
          style={{ backgroundColor: color }}
          onClick={() => setColor(color)}
        />
      ))}
    </div>
  );
}
