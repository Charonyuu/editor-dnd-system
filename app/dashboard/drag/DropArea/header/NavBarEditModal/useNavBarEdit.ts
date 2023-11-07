import { NavBarType } from "../type";
import React from "react";

export default function useNavBarEdit(
  setData: React.Dispatch<React.SetStateAction<NavBarType>>
) {


  function setLogo(payload: string) {
    setData((prev) => ({ ...prev, logo: payload }));
  }

  function setColor(payload: string) {
    setData((prev) => ({ ...prev, color: payload }));
  }

  function setBgColor(payload: string) {
    setData((prev) => ({ ...prev, bgColor: payload }));
  }

  function addNav() {
    const newField = {
      id: Date.now(),
      name: "",
      url: "",
      isDropDown: false,
      childrens: [],
    };
    setData((prev) => ({ ...prev, navs: [...prev.navs, newField] }));
  }

  function addChild(navId: number) {
    setData((prev) => ({
      ...prev,
      navs: prev.navs.map((nav) =>
        nav.id === navId
          ? {
              ...nav,
              childrens: [
                ...nav.childrens,
                {
                  id: Date.now().toString(),
                  name: "",
                  url: "",
                  // Add other properties for child items here if needed
                },
              ],
            }
          : nav
      ),
    }));
  }

  function updateNav(
    id: number,
    type: string,
    value: string | boolean | number
  ) {
    setData((prev) => ({
      ...prev,
      navs: prev.navs.map((nav) =>
        nav.id === id ? { ...nav, [type]: value } : nav
      ),
    }));
  }

  function updateChild(
    navId: number,
    childId: string,
    type: string,
    value: string | boolean | number
  ) {
    setData((prev) => ({
      ...prev,
      navs: prev.navs.map((nav) =>
        nav.id === navId
          ? {
              ...nav,
              childrens: nav.childrens?.map((child) =>
                child.id === childId ? { ...child, [type]: value } : child
              ),
            }
          : nav
      ),
    }));
  }

  return {
    setLogo,
    setColor,
    setBgColor,
    addNav,
    addChild,
    updateNav,
    updateChild,
  };
}
