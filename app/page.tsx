"use client"
import React, { FC } from 'react';
import DroppableArea from "../components/DroppableArea";
import DraggableList from '@/components/DraggableList';

const App: FC = () => {

  return (
    <div className="flex">
      <DroppableArea />
      <DraggableList />
    </div>
  );
}

export default App;
