import React, { useState } from "react";
import TreeNode from "./tree-node";
import { useGlobalStore } from "@/renderer/store/store";

const Outliner = () => {
  const { assetList } = useGlobalStore();
  return (
    <div className="relative w-full h-1/2 overflow-hidden bg-top-panel-tab-enabled rounded">
      {/* <div className="relative w-full h-full flex  flex-col  overflow-hidden"> */}
      <div className="absolute z-0 w-full h-full overflow-hidden">
        {Array.from({ length: 20 }, (x, i) => i + 1).map((index: number) => (
          <div key={index} className="w-full outliner h-7" />
        ))}
      </div>
      <div className="absolute w-full h-full z-20 overflow-y-scroll">
        {assetList.map((child: any, index: number) => (
          <TreeNode
            key={index}
            node={child}
            depth={1}
            length={1}
            index={1}
            selected={false}
          />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Outliner;
