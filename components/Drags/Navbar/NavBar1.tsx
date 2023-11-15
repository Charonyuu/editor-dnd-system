"use client";

import { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { NavBarType } from "@/app/dashboard/drag/DropArea/header/type";

export const NavMenu: FC<{ data: NavBarType; className?: string }> = ({
  data,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "w-full p-2 flex items-center rounded-b-lg",
        className
      )}
      style={{ backgroundColor: data.bgColor, color: data.color }}
    >
      {data.logo ? (
        // <Image
        //   width={100}
        //   height={40}
        //   alt="logo"
        //   className="w-[100px] h-[40px] object-cover"
        //   src={data.logo}
        // />
        <img
          alt="logo"
          className="w-[100px] h-[40px] object-cover"
          src={data.logo}
        />
      ) : null}

      <div className="flex items-center ml-4">
        {data.navs.map((nav) => (
          <div key={nav.id} className="mx-2">
            {nav.isDropDown ? (
              <div className=" group relative cursor-pointer">
                <div className="peer mx-1 font-semibold">{nav.name}</div>
                <div className="absolute top-8 bg-white flex-col items-center group-hover:flex  group-hover:z-[10] flex z-[1]">
                  <div className="">
                    {nav.childrens?.map((children) => (
                      <a
                        key={children.name}
                        className="px-2 py-1 rounded-md hover:underline"
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
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                target="_blank"
                className=" font-semibold"
                rel="noopener noreferrer"
                href={nav.url!}
              >
                {nav.name}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
