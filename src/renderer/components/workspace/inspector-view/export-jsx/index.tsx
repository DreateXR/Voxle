import { useGlobalStore } from "@/renderer/store/store";
import { useThree } from "@react-three/fiber";
import React, { useState } from "react";

const ExportToJsx: React.FC<{ selectedTab: string; title: string }> = ({
  selectedTab,
  title,
}) => {
  //   const { scene } = useThree();
  const { assetList } = useGlobalStore();
  return (
    <div
      className={`w-full h-full ${
        selectedTab == title ? "flex flex-col" : "hidden"
      }  p-4  bg-top-panel-tab-enabled text-app-white gap-6 overflow-y-scroll`}
    >
      <div
        className="px-6 py-2 flex justify-center items-center cursor-pointer bg-app-white-disable hover:bg-app-white text-app-primary-color"
        onClick={() => {
          const x = window.electronAPI.convertToJsx({
            model: "Test",
            filename: "hihi",
          });
        }}
      >
        Test Button
      </div>
    </div>
  );
};

export default ExportToJsx;
