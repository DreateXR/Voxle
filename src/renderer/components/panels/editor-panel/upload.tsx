import React from "react";
import { APP_COLOR_SCHEME } from "@config/color-scheme";

const Upload: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 aspect-square bg-app-border-color rounded p-1 cursor-pointer bg-opacity-60 hover:bg-opacity-100"
      onClick={onClick}
    >
      <path
        fill={APP_COLOR_SCHEME["app-white"]}
        d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z"
      />
    </svg>
  );
};

export default Upload;
