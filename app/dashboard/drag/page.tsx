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
        <div className="w-[calc(100vw_-_350px)]">
          <DroppableArea />
        </div>
        <div className="relative w-[350px] flex-shrink-0">
          <DraggableList />
        </div>
      </div>
      <FeatureControls />
    </DragComponentProvider>
  );
};

export default Main;
