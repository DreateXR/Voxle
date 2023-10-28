import { useGlobalStore } from "@/renderer/store/store";
import React, { useState } from "react";
import Switch from "react-switch";
import ObjectName from "./object-name";
import ObjectPosition from "./object-position";
import ObjectRotation from "./object-rotation";
import ObjectScale from "./object-scale";

const Properties: React.FC<{ selectedTab: string; title: string }> = ({
  selectedTab,
  title,
}) => {
  return (
    <div
      className={`absolute w-full h-full ${
        selectedTab == title ? "flex flex-col" : "hidden"
      }  p-4  bg-top-panel-tab-enabled text-app-white gap-6 overflow-y-scroll`}
    >
      <ObjectName />
      <ObjectPosition />
      <ObjectRotation />
      <ObjectScale />
    </div>
  );
};

export default Properties;
