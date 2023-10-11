import React from "react";
import Upload from "./upload";
import SelectionMode from "./selection-mode";
import ToggleGridVisibility from "./toggle-grid-visibility";
import ToggleAxisVisibility from "./toggle-axis-visibility";
import ToggleTransformControlsSpace from "./toggle-transform-controls-space";
import SelectTransformControlsMode from "./select-transform-controls-mode";
import ToggleSelectionOutline from "./toggle-selection-outline";
import ToggleHoverOutline from "./toggle-hover-outline";

const EditorPanel = () => {
  return (
    <div className="absolute top-0 w-full p-2 z-20 flex justify-between items-center">
      <div className="flex gap-2">
        <Upload />
        <SelectionMode />
      </div>
      <div className="flex gap-2">
        <ToggleTransformControlsSpace />
        <SelectTransformControlsMode />
        <ToggleSelectionOutline />
        <ToggleHoverOutline />
      </div>
      <div className="flex gap-2">
        <ToggleGridVisibility />
        <ToggleAxisVisibility />
      </div>
    </div>
  );
};

export default EditorPanel;
