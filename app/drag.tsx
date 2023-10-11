"use client"

import React, { FC } from 'react';
import DroppableArea from "../components/DroppableArea";
import DraggableList from '@/components/DraggableList';
import { tempBoxs } from '@/components/templates';
import DragComponentProvider, { useDragContext } from '@/components/Provider/DragProvider';




const Main: FC = () => {
  return (
    <DragComponentProvider>
      <App />
    </DragComponentProvider>
  );
}

const App: FC = () => {
  const { components, setComponents } = useDragContext()

  const handleDragStart = (e: React.DragEvent, CompType: string) => {
    e.dataTransfer.setData("component_type", CompType);
  };

  const handleDrop = (e: React.DragEvent) => {
    const CompType = e.dataTransfer.getData("component_type");
    const Component = { component: tempBoxs[CompType as keyof typeof tempBoxs], id: Date.now(), type: CompType };

    setComponents([...components, Component]);
  };

  return (
    <div className="flex">
      <DroppableArea clear={() => setComponents([])} onDrop={handleDrop} components={components} />
      <DraggableList handleDragStart={handleDragStart} />
    </div>
  );
}

export default Main;
