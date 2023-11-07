import React from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { twMerge } from "tailwind-merge";

type Props = {
  value: string;
  setValue: (text: string) => void;
  className?: string;
};

export default function Quill({ value, setValue, className }: Props) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      [{ color: [] }, { background: [] }], // color pickers
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className={twMerge("h-[300px] mb-[80px]", className)}
        modules={modules}
      />
    </div>
  );
}
