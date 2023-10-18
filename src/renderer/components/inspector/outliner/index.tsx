import { useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import TreeNode from "./tree-node";
import { useGlobalStore } from "@/renderer/store/store";
import OutlinerTopPanel from "./outliner-top-panel";
import OutlinerBottomPanel from "./outliner-bottom-panel";

const Outliner: React.FC<{ selectedTab: string }> = ({ selectedTab }) => {
  return (
    <div
      className={`w-full h-full ${
        selectedTab == "Outliner" ? "flex flex-col gap-1" : "hidden"
      }`}
    >
      <OutlinerTopPanel />
      <OutlinerBottomPanel />
    </div>
  );
};

export default Outliner;
