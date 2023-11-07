"use client";

import React, { FC } from "react";
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
      setting: {
        bgColor: "#FFFFFF",
        padding: 0,
        width: 100,
        align: "left",
        animation: "none",
      },
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
      {components.map((Comp) => {
        const { id, ...ComponentData } = Comp;
        return (
          <div
            className="relative rounded-xl overflow-hidden mb-2 flex flex-col"
            style={{
              paddingLeft: Comp.setting.padding + "px",
              paddingRight: Comp.setting.padding + "px",
              width: Comp.setting.width + "%",
              alignItems: Comp.setting.align,
              backgroundColor: Comp.setting.bgColor,
              // animation
            }}
            key={Comp.id}
          >
            <Comp.component id={Comp.id} ComponentData={ComponentData} />
          </div>
        );
      })}
    </div>
  );
};

export default DroppableArea;
