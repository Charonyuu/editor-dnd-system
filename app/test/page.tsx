"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function MyComponent() {
  const [value, setValue] = useState("");
  console.log(value);
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
    <div className="w-[1000px]">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="h-[500px] mb-[50px]"
        modules={modules}
      />
      <div className="my-2">Example:</div>
      <div dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}
