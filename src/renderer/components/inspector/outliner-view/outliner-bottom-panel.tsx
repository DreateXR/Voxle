import { useGlobalStore } from "@/renderer/store/store";
import React, { useState } from "react";
import Switch from "react-switch";
import ObjectName from "./object-name";
import ObjectPosition from "./object-position";
import ObjectRotation from "./object-rotation";
import ObjectScale from "./object-scale";

const OutlinerBottomPanel = () => {
  const { selectedObject } = useGlobalStore();
  return (
    <div className="w-full max-h-1/2 h-1/2 flex flex-col p-4 rounded  bg-top-panel-tab-enabled text-app-white gap-6 overflow-y-scroll">
      <ObjectName />
      <ObjectPosition />
      <ObjectRotation />
      <ObjectScale />
    </div>
  );
};

export default OutlinerBottomPanel;
