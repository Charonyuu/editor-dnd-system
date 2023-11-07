import { TextType } from "@/Types/textType";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function TextType1({ data }: { data: TextType }) {
  const a = "left";
  const animationObject = {
    left: " animation_LFI",
    bottom: " animation_BFI",
    right: " animation_RFI",
  };

  return (
    <div
      className={twMerge("w-full", animationObject[a])}
      style={{ textAlign: data.textAlign }}
    >
      <div dangerouslySetInnerHTML={{ __html: data.text }} />
    </div>
  );
}
