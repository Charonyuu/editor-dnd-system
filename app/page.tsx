"use client"

import React, { FC, useState } from 'react';
import DroppableArea from "../components/DroppableArea";
import DraggableList from '@/components/DraggableList';
import { tempBoxs } from '@/components/templates';

const App: FC = () => {
  const [components, setComponents] = useState<FC[]>([]);

  const handleDragStart = (e: React.DragEvent, CompType: string) => {
    e.dataTransfer.setData("component_type", CompType);
  };

  const handleDrop = (e: React.DragEvent) => {
    const CompType = e.dataTransfer.getData("component_type");
    const Component = tempBoxs[CompType as keyof typeof tempBoxs];

    setComponents([...components, Component]);
  };

  return (
    <div className="flex">
      <DroppableArea clear={() => setComponents([])} onDrop={handleDrop} components={components} />
      <DraggableList handleDragStart={handleDragStart} />
    </div>
  );
}

export default App;