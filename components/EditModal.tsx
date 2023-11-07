import React from "react";
import ReactDOM from "react-dom";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";

type ModalProps = {
  children?: React.ReactNode;
  className?: string;
  modalClassName?: string;
  handleClose?: () => void;
  handleSave?: () => void;
};

export default function EditModal({
  children,
  className,
  modalClassName,
  handleClose,
  handleSave,
}: ModalProps) {
  return ReactDOM.createPortal(
    <div
      className={twMerge(
        "w-screen h-screen fixed z-10 left-0 top-0 flex items-center justify-center",
        modalClassName
      )}
    >
      <div
        className=" absolute w-full h-full bg-black bg-opacity-40 flex justify-center items-center"
        onClick={handleClose}
      />

      <div
        className={twMerge(
          "h-[80vh] w-[80vw] z-20 bg-white text-black border-black p-3 border-solid border rounded-[5px] relative",
          className
        )}
      >
        <div className="flex items-center justify-between px-2">
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleSave}>儲存</Button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
}
