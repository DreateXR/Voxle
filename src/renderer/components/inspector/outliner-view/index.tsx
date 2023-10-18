import { useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import TreeNode from "./tree-node";
import { useGlobalStore } from "@/renderer/store/store";
import OutlinerTopPanel from "./outliner-top-panel";
import OutlinerBottomPanel from "./outliner-bottom-panel";

const OutlinerView: React.FC<{ selectedTab: string; title: string }> = ({
  selectedTab,
  title,
}) => {
  return (
    <div
      className={`w-full h-full ${
        selectedTab == title ? "flex flex-col gap-1" : "hidden"
      }`}
    >
      <OutlinerTopPanel />
      <OutlinerBottomPanel />
    </div>
  );
};

export default OutlinerView;
