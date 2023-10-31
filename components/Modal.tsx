import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { twMerge } from "tailwind-merge";
import { IoClose } from "react-icons/io5";

type ModalProps = {
  children?: React.ReactNode;
  className?: string;
  modalClassName?: string;
  close?: () => void;
};

export default function Modal({
  children,
  className,
  modalClassName,
  close,
}: ModalProps) {
  //   const { isMobile } = useIsMobile();
  //   useEffect(() => {
  //     if (!isMobile) return;
  //     document.body.style.overflowY = "hidden";

  //     return () => {
  //       document.body.style.overflowY = "unset";
  //     };
  //   }, []);

  return ReactDOM.createPortal(
    <div
      className={twMerge(
        "w-screen h-screen fixed z-10 left-0 top-0 flex items-center justify-center",
        modalClassName
      )}
    >
      <div
        className=" absolute w-full h-full bg-black bg-opacity-40 flex justify-center items-center"
        onClick={close}
      />
      <div
        className={twMerge(
          "h-[80vh] w-[80vw] z-20 bg-white text-black border-black p-3 border-solid border rounded-[5px] relative",
          className
        )}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
