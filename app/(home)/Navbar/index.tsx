"use client";
import React from "react";
import Image from "next/image";
import ModeSwitch from "./darkmodeSwitch";
import I18nDropDown from "./i18nDropDown";
import { Button } from "../../../components/ui/button";
import { BiLogInCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import useIsLogin from "./useIsLogin";

export default function HomeNavbar() {
  const router = useRouter();
  const { theme } = useTheme();
  const { isLogin } = useIsLogin();
  return (
    <div className="fixed top-0 w-screen flex justify-between items-center px-4 py-1 border-b border-black border-solid">
      <div className="flex items-center">
        <a href="/getStarted" className="flex items-center">
          <Image
            width={50}
            height={30}
            src={theme === "light" ? "/logoBlack.png" : "/logoWhite.png"}
            alt="logo image"
          />
          <p className="font-semibold mr-4 font-Pixelify">Web Draggie</p>
        </a>
        <a href="/getStarted" className="mx-4">
          Get Started
        </a>
        <a href="/pricing" className="mx-4">
          Pricing
        </a>
        <a href="/example" className="mx-4">
          Examples
        </a>
        <a href="/contact" className="mx-4">
          Contact Me
        </a>
      </div>
      <div className="flex items-center">
        {/* <div className='mx-4'>switch</div> */}
        {/* <ModeSwitch /> */}
        <I18nDropDown />
        {!isLogin ? (
          <Button onClick={() => router.push("/SignIn")} variant="outline">
            <BiLogInCircle fontSize="20px" />
            <p className="ml-2">login</p>
          </Button>
        ) : (
          <Button
            onClick={() => router.push("/dashboard/drag")}
            variant="outline"
          >
            <BiLogInCircle fontSize="20px" />
            <p className="ml-2">Go Drag</p>
          </Button>
        )}
      </div>
    </div>
  );
}
