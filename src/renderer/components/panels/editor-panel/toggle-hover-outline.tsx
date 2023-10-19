import { enableOutline } from "@/renderer/lib/raycast";
import { useGlobalStore } from "@/renderer/store/store";
import { APP_COLOR_SCHEME } from "@config/color-scheme";
import VOXLE_TOOLTIP from "@config/tooltip";
import React from "react";

const ToggleHoverOutline: React.FC<{}> = () => {
  const { hoverHighlight, setHoverHighlight } = useGlobalStore();
  return (
    <div
      className="relative h-8 aspect-square bg-app-primary-color rounded p-1.5 cursor-pointer bg-opacity-75 hover:bg-opacity-100 hover:bg-app-hover-color"
      data-tooltip-id={VOXLE_TOOLTIP.id}
      data-tooltip-content={VOXLE_TOOLTIP["toggle-hover-outline-content"]}
      onClick={() => {
        setHoverHighlight(!hoverHighlight);
      }}
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          fill={
            hoverHighlight
              ? APP_COLOR_SCHEME["app-white"]
              : APP_COLOR_SCHEME["app-white-disable"]
          }
          d="M2,4C2,2.89 2.9,2 4,2H7V4H4V7H2V4M22,4V7H20V4H17V2H20A2,2 0 0,1 22,4M20,20V17H22V20C22,21.11 21.1,22 20,22H17V20H20M2,20V17H4V20H7V22H4A2,2 0 0,1 2,20M10,2H14V4H10V2M10,20H14V22H10V20M20,10H22V14H20V10M2,10H4V14H2V10Z"
        />

        <path
          fill={
            hoverHighlight
              ? APP_COLOR_SCHEME["app-white"]
              : APP_COLOR_SCHEME["app-white-disable"]
          }
          d="M9,7V17H11V13H13V17H15V7H13V11H11V7H9Z"
        />
      </svg>
    </div>
  );
};

export default ToggleHoverOutline;
