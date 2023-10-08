import React from "react";
import Upload from "./upload";
import SelectionMode from "./selection-mode";
import SelectGridVisibility from "./select-grid-visibility";
import SelectAxisVisibility from "./select-axis-visibility";

const EditorPanel = () => {
  return (
    <div className="absolute top-0 w-full p-2 z-20 flex justify-between items-center">
      <div className="flex gap-2">
        <Upload onClick={() => {}} />
        <SelectionMode />
      </div>
      <div className="flex gap-2">
        <SelectGridVisibility />
        <SelectAxisVisibility />
      </div>
    </div>
  );
};

export default EditorPanel;
