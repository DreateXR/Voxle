import { useGlobalStore } from "@/renderer/store/store";
import { APP_COLOR_SCHEME } from "@config/color-scheme";
import React from "react";

const SelectAxisVisibility: React.FC<{}> = () => {
  const { axisVisibility, setAxisVisibility } = useGlobalStore();
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 aspect-square bg-app-border-color rounded p-1.5 cursor-pointer bg-opacity-60 hover:bg-opacity-100"
      onClick={() => {
        setAxisVisibility(!axisVisibility);
      }}
    >
      <path
        fill={
          axisVisibility
            ? APP_COLOR_SCHEME["app-white"]
            : APP_COLOR_SCHEME["app-white-disable"]
        }
        d="M12,2L16,6H13V13.85L19.53,17.61L21,15.03L22.5,20.5L17,21.96L18.53,19.35L12,15.58L5.47,19.35L7,21.96L1.5,20.5L3,15.03L4.47,17.61L11,13.85V6H8L12,2Z"
      />
    </svg>
  );
};

export default SelectAxisVisibility;
