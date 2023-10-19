import { useGlobalStore } from "@/renderer/store/store";
import { APP_COLOR_SCHEME } from "@config/color-scheme";
import VOXLE_TOOLTIP from "@config/tooltip";
import React from "react";

const RotateMode = () => {
  const { transformControls, setTransformControls } = useGlobalStore();
  return (
    <div
      className="relative h-8 aspect-square bg-app-primary-color rounded p-1.5 cursor-pointer bg-opacity-75 hover:bg-opacity-100 hover:bg-app-hover-color"
      data-tooltip-id={VOXLE_TOOLTIP.id}
      data-tooltip-content={VOXLE_TOOLTIP["select-transform-rotate-mode"]}
      onClick={() => {
        if (transformControls.mode == "rotate") return;
        setTransformControls({
          mode: "rotate",
          space: transformControls.space,
        });
      }}
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          fill={
            transformControls.mode == "rotate"
              ? APP_COLOR_SCHEME["app-white"]
              : APP_COLOR_SCHEME["app-white-disable"]
          }
          d="M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z"
        />
      </svg>
    </div>
  );
};

export default RotateMode;
