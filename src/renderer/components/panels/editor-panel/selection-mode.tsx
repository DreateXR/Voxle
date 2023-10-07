import React from "react";
import { APP_COLOR_SCHEME } from "@config/color-scheme";
import { useGlobalStore } from "@/renderer/store/store";

const SelectionMode: React.FC<{}> = () => {
  const { setSelectionMode } = useGlobalStore();
  return (
    <div className="relative h-8 bg-app-border-color rounded px-2 cursor-pointer bg-opacity-60 hover:bg-opacity-100 flex justify-center items-center">
      {/* <label className="absolute top-0 left-0 text-[#505050] text-xs">
        Selection:
      </label> */}
      <select
        className="bg-transparent cursor-pointer text-xs border-[1px] border-viewport-base-color hover:border-viewport-grid-color rounded p-0.5 outline-none"
        name="selection mode"
        onChange={(event: any) => {
          setSelectionMode(event.target.value);
        }}
      >
        <option className="bg-app-border-color" value="object">
          Object Mode
        </option>
        <option className="bg-app-border-color" value="mesh">
          Mesh Mode
        </option>
      </select>
    </div>
  );
};

export default SelectionMode;
