"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BiLogInCircle } from "react-icons/bi";

export default function DashboardNavbar() {
  const { theme } = useTheme();
  const router = useRouter();
  return (
    <div className="fixed top-0 w-screen flex justify-between items-center px-4 py-1 border-b border-black border-solid z-10 bg-black text-white">
      <div className="flex items-center ">
        <a href="/getStarted" className="flex items-center">
          <Image
            width={50}
            height={30}
            src={theme === "light" ? "/logoBlack.png" : "/logoWhite.png"}
            alt="logo image"
          />
          <p className="font-semibold mr-4 font-Pixelify">Web Draggie</p>
        </a>
        <a href="drag" className="mx-4">
          編輯
        </a>
        <a href="analyze" className="mx-4">
          分析
        </a>
      </div>
      <div className="flex items-center">
        {/* <div className='mx-4'>switch</div> */}
        <Button onClick={() => router.push("/SignIn")} variant="outline" className="text-black">
          <BiLogInCircle fontSize="20px" />
          <p className="ml-2">logout</p>
        </Button>
      </div>
    </div>
  );
}
