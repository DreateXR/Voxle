import { useGlobalStore } from "@/renderer/store/store";
import { APP_COLOR_SCHEME } from "@config/color-scheme";
import VOXLE_TOOLTIP from "@config/tooltip";
import React from "react";

const ToggleGridVisibility: React.FC<{}> = () => {
  const { gridVisibility, setGridVisibility } = useGlobalStore();
  return (
    <div
      className="relative h-8 aspect-square bg-app-primary-color rounded p-1.5 cursor-pointer bg-opacity-75 hover:bg-opacity-100 hover:bg-app-hover-color"
      data-tooltip-id={VOXLE_TOOLTIP.id}
      data-tooltip-content={VOXLE_TOOLTIP["toggle-grid-visibility-content"]}
      onClick={() => {
        setGridVisibility(!gridVisibility);
      }}
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          fill={
            gridVisibility
              ? APP_COLOR_SCHEME["app-white"]
              : APP_COLOR_SCHEME["app-white-disable"]
          }
          d="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z"
        />
      </svg>
    </div>
  );
};

export default ToggleGridVisibility;
