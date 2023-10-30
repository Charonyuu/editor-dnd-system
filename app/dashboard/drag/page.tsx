"use client";

import React, { FC } from "react";
import DroppableArea from "./DropArea";
import DraggableList from "./DragList";
import DragComponentProvider from "./DragProvider";
import FeatureControls from "./FeatureControls";

const Main: FC = () => {
  return (
    <DragComponentProvider>
      <div className="flex w-screen">
        <DroppableArea />
        <div className="relative w-[450px]">
          <DraggableList />
        </div>
      </div>
      <FeatureControls />
    </DragComponentProvider>
  );
};

export default Main;
