"use client";

import React, { FC } from "react";
import CompTool from "./CompTool";
import { useDragContext } from "../DragProvider";
import { tempBoxs } from "./templates";

const DroppableArea: FC = () => {
  const { components, setComponents, bgColor } = useDragContext();
  const preventDefault = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const handleOnDrop = (e: React.DragEvent) => {
    const CompType = e.dataTransfer.getData("component_type");
    const Component = {
      component: tempBoxs[CompType as keyof typeof tempBoxs],
      id: Date.now(),
      type: CompType,
    };

    setComponents([...components, Component]);
  };

  return (
    <div
      onDrop={handleOnDrop}
      onDragOver={preventDefault}
      className="w-full min-h-screen relative p-5"
      style={{ backgroundColor: bgColor }}
    >
      {components.map((Comp) => (
        <div
          className="relative border border-solid rounded-xl overflow-hidden mb-2 flex"
          key={Comp.id}
        >
          <Comp.component id={Comp.id} />
          <CompTool id={Comp.id} />
        </div>
      ))}
    </div>
  );
};

export default DroppableArea;
