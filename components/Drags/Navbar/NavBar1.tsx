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
