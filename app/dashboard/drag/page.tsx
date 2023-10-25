"use client";

import React, { FC } from "react";
import DroppableArea from "./DropArea";
import DraggableList from "./DragList";
import DragComponentProvider from "./DragProvider";

const Main: FC = () => {
  return (
    <DragComponentProvider>
      <div className="flex">
        <DroppableArea />
        <DraggableList />
      </div>
    </DragComponentProvider>
  );
};

export default Main;
