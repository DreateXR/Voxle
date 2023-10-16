import React, { useEffect, useState } from "react";
import DropDown from "./drop-down";
import ToggleVisibility from "./toggle-visibility";
import { useGlobalStore } from "@/renderer/store/store";

const TreeNode: React.FC<{
  node: any;
  depth: number;
  length: number;
  index: number;
}> = ({ node, depth, length, index }) => {
  const WIDTH_CONSTANT = 16;
  const [isExpanded, setIsExpanded] = useState(false);
  const { setSelectedObject } = useGlobalStore();
  if (!node) {
    return null;
  }
  if ((!node.isMesh && !node.isGroup && !node.isObject3D) || node.isBone) {
    return null;
  }
  useEffect(() => {
    // console.log(node);
  }, [node]);
  return (
    <>
      <div
        className="w-full flex py-1 pr-2 gap-2 outliner h-7 items-center"
        // onDragOver={(e: any) => {
        //     e.preventDefault();
        // }}
        // onDrop={(e: any) => {
        //   e.preventDefault();
        //   const nodeId = JSON.parse(e.dataTransfer.getData("node"));
        //   console.log(nodeId);
        // }}
      >
        <div style={{ minWidth: `${WIDTH_CONSTANT * (depth - 1)}px` }} />
        <DropDown isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <div
          className="truncate grow font-mono text-sm cursor-pointer text-app-white hover:text-[#ffffff]"
          onClick={() => {
            setSelectedObject(node);
          }}
          //   draggable="true"
          //   onDragStart={(e: any) => {
          //     e.dataTransfer.setData("node", JSON.stringify(node));
          //   }}
        >
          {node.name ? node.name : node.type}
        </div>
        <ToggleVisibility
          isVisible={node.visible}
          setModelVisibility={(visibility: any) => {
            node.visible = visibility;
          }}
        />
      </div>

      {isExpanded &&
        node.children &&
        node.children.map((child: any, index: any) => (
          <TreeNode
            key={index}
            node={child}
            depth={depth + 1}
            length={node.children.length}
            index={index + 1}
          />
        ))}
    </>
  );
};

export default TreeNode;
