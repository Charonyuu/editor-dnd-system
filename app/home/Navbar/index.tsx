"use client";
import React from "react";
import Image from "next/image";
import ModeSwitch from "./darkmodeSwitch";
import I18nDropDown from "./i18nDropDown";
import { Button } from "../../../components/ui/button";
import { BiLogInCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

export default function Navbar() {
  const router = useRouter();
  const { theme } = useTheme();
  return (
    <div className="fixed top-0 w-screen flex justify-between items-center px-4 py-1 border-b border-black border-solid">
      <div className="flex items-center">
        <Image
          width={50}
          height={30}
          src={theme === "light" ? "/logoBlack.png" : "/logoWhite.png"}
          alt="logo image"
        />
        <p className="font-semibold mr-4 font-Pixelify">Web Draggie</p>
        <a href="getStarted" className="mx-4">
          Get Started
        </a>
        <a href="pricing" className="mx-4">
          Pricing
        </a>
        <a href="example" className="mx-4">
          Examples
        </a>
      </div>
      <div className="flex items-center">
        {/* <div className='mx-4'>switch</div> */}
        <ModeSwitch />
        <I18nDropDown />
        <Button onClick={() => router.push("SignIn")} variant="outline">
          <BiLogInCircle fontSize="20px" />
          <p className="ml-2">login</p>
        </Button>
      </div>
    </div>
  );
}
