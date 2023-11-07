import React from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose?: () => void;
  handleSave?: () => void;
  className?: string;
};

export default function SideMenu({
  children,
  isOpen,
  handleSave,
  handleClose,
  className,
}: Props) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-opacity-50 inset-0 transform ease-in-out" +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          "w-[350px] top-[50px] right-0 absolute bg-white border-l border-solid border-black h-[calc(100vh_-_50px)] delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article
          className={twMerge(
            "relative w-full overflow-hidden h-full",
            className
          )}
        >
          <div className="w-full flex items-center justify-between px-2">
            <Button onClick={handleClose}>取消</Button>
            <Button onClick={handleSave}>儲存</Button>
          </div>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer"
        onClick={handleClose}
      />
    </main>
  );
}
