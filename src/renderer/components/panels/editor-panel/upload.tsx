import React, { useRef } from "react";
import { APP_COLOR_SCHEME } from "@config/color-scheme";
import { fileUploader } from "@/renderer/lib/file/upload-file";

const Upload: React.FC<{}> = () => {
  const fileInputRef = useRef(null);
  return (
    <div
      className="relative h-8 aspect-square bg-app-primary-color rounded p-1.5 cursor-pointer bg-opacity-75 hover:bg-opacity-100 hover:bg-app-hover-color"
      onClick={() => {
        fileInputRef.current.click();
      }}
    >
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={fileUploader}
      />
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          fill={APP_COLOR_SCHEME["app-white"]}
          d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z"
        />
      </svg>
    </div>
  );
};

export default Upload;
