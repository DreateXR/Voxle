import { useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import TreeNode from "./outliner/tree-node";
import { useGlobalStore } from "@/renderer/store/store";
import InspectorTopPanel from "./inspector-top-panel";
import InspectorBottomPanel from "./inspector-bottom-panel";

const InspectorView: React.FC<{ selectedTab: string; title: string }> = ({
  selectedTab,
  title,
}) => {
  return (
    <div
      className={`w-full h-full ${
        selectedTab == title ? "flex flex-col gap-1" : "hidden"
      }`}
    >
      <InspectorTopPanel />
      <InspectorBottomPanel />
    </div>
  );
};

export default InspectorView;
