import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChromePicker, TwitterPicker } from "react-color";
import useOutsideClick from "@/lib/hooks/useOutsideClick";
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
  const [isOpen, setIsOpen] = useState(false);
  const [chooseColor, setChooseColor] = useState<any>();
  const colorPickerRef = useOutsideClick<HTMLDivElement>(() =>
    isOpen === true ? setIsOpen(false) : {}
  );
  return (
    <div className="flex items-center relative">
      {colors.map((color) => (
        <div
          key={color}
          className={twMerge(
            "h-6 w-6 rounded-full mr-1 cursor-pointer my-2",
            selectedColor === color
              ? "border-2 border-[#D0D0D0] border-solid"
              : ""
          )}
          style={{ backgroundColor: color }}
          onClick={() => setColor(color)}
        />
      ))}
      <div
        className="h-6 w-6 rounded-full"
        style={{
          background: chooseColor
            ? chooseColor.hex
            : "conic-gradient(yellow, green, blue, purple, red, orange, yellow)",
        }}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div
          className="absolute z-20 bg-white text-white top-[40px] right-[-10px]"
          ref={colorPickerRef}
        >
          <TwitterPicker
            color={chooseColor}
            onChange={(color) => setColor(color.hex)}
            triangle="top-right"
            className=" "
          />
        </div>
      )}
    </div>
  );
}
