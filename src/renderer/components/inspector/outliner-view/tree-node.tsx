import React, { useEffect, useState } from "react";
import DropDown from "./drop-down";
import ToggleVisibility from "./toggle-visibility";
import { useGlobalStore } from "@/renderer/store/store";

const TreeNode: React.FC<{
  node: any;
  depth: number;
  length: number;
  index: number;
  selected: boolean;
}> = ({ node, depth, length, index, selected }) => {
  const WIDTH_CONSTANT = 16;
  const [isExpanded, setIsExpanded] = useState(false);
  const { selectedObject, setSelectedObject } = useGlobalStore();
  const [highlight, setHightlight] = useState(false);

  useEffect(() => {
    if (!node) return;
    if (!selectedObject) {
      setHightlight(false);
    } else if (node.uuid == selectedObject.uuid || selected) {
      setHightlight(true);
    } else {
      setHightlight(false);
    }
  }, [selectedObject, selected]);

  if (!node) {
    return null;
  }
  if ((!node.isMesh && !node.isGroup && !node.isObject3D) || node.isBone) {
    return null;
  }
  //ffc55a fda507
  return (
    <>
      <div className="w-full flex py-1 pr-2 gap-2 outliner h-7 items-center">
        <div style={{ minWidth: `${WIDTH_CONSTANT * (depth - 1)}px` }} />
        <DropDown isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <div
          className={`truncate grow font-mono text-sm cursor-pointer ${
            highlight ? "text-[#ffc55a]" : "text-app-white"
          }  hover:text-[#ffc55a]`}
          onClick={() => {
            setSelectedObject(node);
          }}
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
            selected={highlight}
          />
        ))}
    </>
  );
};

export default TreeNode;
