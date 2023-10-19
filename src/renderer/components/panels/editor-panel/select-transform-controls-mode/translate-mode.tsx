import { useGlobalStore } from "@/renderer/store/store";
import { APP_COLOR_SCHEME } from "@config/color-scheme";
import VOXLE_TOOLTIP from "@config/tooltip";
import React from "react";

const TranslateMode = () => {
  const { transformControls, setTransformControls } = useGlobalStore();
  return (
    <div
      className="relative h-8 aspect-square bg-app-primary-color rounded p-1.5 cursor-pointer bg-opacity-75 hover:bg-opacity-100 hover:bg-app-hover-color"
      data-tooltip-id={VOXLE_TOOLTIP.id}
      data-tooltip-content={VOXLE_TOOLTIP["select-transform-translate-mode"]}
      onClick={() => {
        if (transformControls.mode == "translate") return;
        setTransformControls({
          mode: "translate",
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
            transformControls.mode == "translate"
              ? APP_COLOR_SCHEME["app-white"]
              : APP_COLOR_SCHEME["app-white-disable"]
          }
          d="M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z"
        />
      </svg>
    </div>
  );
};

export default TranslateMode;
