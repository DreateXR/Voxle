import React from "react";
import Upload from "./upload";
import SelectionMode from "./selection-mode";
import SelectGridVisibility from "./select-grid-visibility";

const EditorPanel = () => {
  return (
    <div className="absolute top-0 w-full p-2 z-10 flex justify-start items-center gap-2">
      <Upload onClick={() => {}} />
      <SelectionMode />
      <SelectGridVisibility />
    </div>
  );
};

export default EditorPanel;
