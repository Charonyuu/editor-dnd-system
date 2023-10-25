"use client";

import React, { createContext, useState, useContext, FC } from "react";
import useGetDrag from "./useGetDrag";
import { ComponentInfoType } from "../DropArea/type";

type DragContextType = {
  components: ComponentInfoType[];
  setComponents: React.Dispatch<React.SetStateAction<ComponentInfoType[]>>;
};

const DragContext = createContext<DragContextType | null>(null);

export const useDragContext = () => {
  const context = useContext(DragContext);
  if (!context) {
    throw new Error("useDrag must be used within a DragProvider");
  }
  return context;
};

type ProviderProps = {
  children: React.ReactNode;
};

export default function DragComponentProvider({ children }: ProviderProps) {
  const { components, setComponents } = useGetDrag();
  return (
    <DragContext.Provider value={{ components, setComponents }}>
      {children}
    </DragContext.Provider>
  );
}
