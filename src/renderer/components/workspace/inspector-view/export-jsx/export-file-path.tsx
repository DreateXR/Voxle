import React, { useRef } from "react";

const ExportFilePath: React.FC<{ outputPath: any; setOutputPath: any }> = ({
  outputPath,
  setOutputPath,
}) => {
  return (
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
  );
};

export default ExportFilePath;
