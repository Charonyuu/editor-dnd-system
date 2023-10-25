import React, { FC, useState } from "react";
import TextEditModal from "./TextEditModal";
import { TempContainerProps } from "../type";

const Text1: FC<TempContainerProps> = ({ id }) => {
  const [title, setTitle] = useState("這是標題");
  const [content, setContent] = useState(["這是內容"]);

  return (
    <div className="w-full relative group px-5">
      <h1>{title}</h1>
      <div>
        {content.map((word, index) => (
          <p className="text-sm" key={index}>
            {word}
          </p>
        ))}
      </div>
      <TextEditModal />
    </div>
  );
};
export default Text1;
