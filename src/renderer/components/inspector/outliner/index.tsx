import { useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import TreeNode from "./tree-node";
import { useGlobalStore } from "@/renderer/store/store";

const Outliner: React.FC<{}> = () => {
  const { assetList } = useGlobalStore();
  return (
    <div className="relative w-full h-full flex flex-col overflow-y-scroll">
      <div className="absolute z-0 w-full h-full overflow-hidden">
        {Array.from({ length: 20 }, (x, i) => i + 1).map((index: number) => (
          <div key={index} className="w-full outliner h-7" />
        ))}
      </div>
      <div className="w-full z-20">
        {assetList.map((child: any, index: number) => (
          <TreeNode key={index} node={child} depth={1} length={1} index={1} />
        ))}
      </div>
    </div>
  );
};

export default Outliner;
