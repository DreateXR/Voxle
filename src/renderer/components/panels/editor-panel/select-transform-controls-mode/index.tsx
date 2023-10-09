import React from "react";
import TranslateMode from "./translate-mode";
import RotateMode from "./rotate-mode";
import ScaleMode from "./scale-mode";

const SelectTransformControlsMode = () => {
  return (
    <div className="flex gap-2">
      <TranslateMode />
      <RotateMode />
      <ScaleMode />
    </div>
  );
};

export default SelectTransformControlsMode;
