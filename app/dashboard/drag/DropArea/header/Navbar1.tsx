"use client";

import { FC, useLayoutEffect, useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import NavBarEditModal from "./NavBarEditModal";
import { NavBarType } from "./type";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TempContainerProps } from "../type";
import { useDragContext } from "../../DragProvider";

const Navbar1: FC<TempContainerProps> = ({ id }) => {
  const { components, setComponents } = useDragContext();
  const [data, setData] = useState<NavBarType>({
    bgColor: "",
    color: "",
    logo: "",
    navs: [
      {
        id: Date.now(),
        name: "",
        url: "",
        isDropDown: false,
        childrens: [{ id: Date.now().toString(), name: "", url: "" }],
      },
    ],
  });
  useLayoutEffect(() => {
    const data = components.find((ele) => ele.id === id);
    if (data?.navbarType) {
      setData(data.navbarType);
    }
  }, []);
  function onComplete(setting: NavBarType) {
    setData(setting);
    setComponents((prev) => {
      const componentsTemp = [...prev];
      const index = componentsTemp.findIndex((ele) => ele.id === id);
      componentsTemp[index] = { ...componentsTemp[index], navbarType: setting };
      return componentsTemp;
    });
  }
  return (
    <div className="w-full relative group px-5">
      <NavMenu data={data} />
      <NavBarEditModal data={data} onComplete={onComplete} />
    </div>
  );
};

export default Navbar1;

export const NavMenu: FC<{ data: NavBarType; className?: string }> = ({
  data,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "w-full p-2 flex items-center rounded-b-lg mb-5",
        className
      )}
      style={{ backgroundColor: data.bgColor, color: data.color }}
    >
      {data.logo ? (
        <Image
          width={100}
          height={40}
          alt="logo"
          className="w-[100px] h-[40px] object-cover"
          src={data.logo}
        />
      ) : null}
      <NavigationMenu>
        <NavigationMenuList>
          {data.navs.map((nav) => (
            <NavigationMenuItem key={nav.id}>
              {nav.isDropDown ? (
                <>
                  <NavigationMenuTrigger>{nav.name}</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full bg-white flex flex-col items-center">
                    <ul className="">
                      {nav.childrens?.map((children) => (
                        <NavigationMenuLink asChild key={children.name}>
                          <a
                            className="px-4 py-2 hover:bg-slate-500 "
                            style={{
                              backgroundColor: data.bgColor,
                              color: data.color,
                            }}
                            href={children.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {children.name}
                          </a>
                        </NavigationMenuLink>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <a target="_blank" rel="noopener noreferrer" href={nav.url!}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {nav.name}
                  </NavigationMenuLink>
                </a>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
