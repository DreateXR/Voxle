import { useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import TreeNode from "./tree-node";
import { useGlobalStore } from "@/renderer/store/store";

const Outliner: React.FC<{}> = () => {
  const { assetList } = useGlobalStore();
  return (
    <div className="w-full h-full flex flex-col overflow-y-scroll">
      {assetList.map((child: any, index: number) => (
        <TreeNode key={index} node={child} depth={1} length={1} index={1} />
      ))}
    </div>
  );
};

export default Outliner;
