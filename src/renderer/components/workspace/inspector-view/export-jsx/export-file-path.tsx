import { APP_COLOR_SCHEME } from "@config/color-scheme";
import React, { useRef } from "react";

const ExportFilePath: React.FC<{
  outputPath: any;
  setOutputPath: any;
  fileName: any;
  setFileName: any;
}> = ({ fileName, setFileName, outputPath, setOutputPath }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex gap-1">
        <div className="relative h-6 aspect-square rounded p-0.5">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill={APP_COLOR_SCHEME["app-white-disable"]}
              d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z"
            />
          </svg>
        </div>
        <input
          className="grow font-mono rounded border-app-white-disable border-[0.5px] bg-top-panel-tab-disabled text-sm pl-1"
          type="text"
          value={fileName}
          onChange={(e) => {
            setFileName(e.target.value);
          }}
        />
      </div>
      <div className="w-full flex gap-2">
        <div className="w-12">
          <div
            className="font-mono cursor-pointer bg-app-scrollbar-color hover:bg-outliner-even-color w-full flex justify-center items-center rounded shadow"
            onClick={async () => {
              const path = await window.electronAPI.selectFolder();
              setOutputPath(path);
            }}
          >
            Path
          </div>
        </div>
        <div className="grow">
          <textarea
            className="w-full font-mono rounded border-app-white-disable border-[0.5px] bg-top-panel-tab-disabled text-sm pl-1"
            rows={3}
            value={outputPath}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default ExportFilePath;
