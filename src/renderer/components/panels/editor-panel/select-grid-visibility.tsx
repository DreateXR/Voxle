import { useGlobalStore } from "@/renderer/store/store";
import { APP_COLOR_SCHEME } from "@config/color-scheme";
import React from "react";

const SelectGridVisibility: React.FC<{}> = () => {
  const { gridVisibility, setGridVisibility } = useGlobalStore();
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 aspect-square bg-app-border-color rounded p-1.5 cursor-pointer bg-opacity-60 hover:bg-opacity-100"
      onClick={() => {
        setGridVisibility(!gridVisibility);
      }}
    >
      {gridVisibility ? (
        <path
          fill={APP_COLOR_SCHEME["app-white"]}
          d="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2Z"
        />
      ) : (
        <path
          fill={APP_COLOR_SCHEME["app-white"]}
          d="M0,2.77L1.28,1.5L22.5,22.72L21.23,24L19.23,22H4C2.92,22 2,21.1 2,20V4.77L0,2.77M10,4V7.68L8,5.68V4H6.32L4.32,2H20A2,2 0 0,1 22,4V19.7L20,17.7V16H18.32L16.32,14H20V10H16V13.68L14,11.68V10H12.32L10.32,8H14V4H10M16,4V8H20V4H16M16,20H17.23L16,18.77V20M4,8H5.23L4,6.77V8M10,14H11.23L10,12.77V14M14,20V16.77L13.23,16H10V20H14M8,20V16H4V20H8M8,14V10.77L7.23,10H4V14H8Z"
        />
      )}
    </svg>
  );
};

export default SelectGridVisibility;
