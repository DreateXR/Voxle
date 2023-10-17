import { useGlobalStore } from "@/renderer/store/store";
import React, { useState } from "react";
import Switch from "react-switch";

const BottomPanel = () => {
  const {
    insights,
    selectedObject,
    enableSelectedObjectInsights,
    setEnableSelectedObjectInsights,
  } = useGlobalStore();
  return (
    <div className="w-full h-1/2 flex flex-col p-6 rounded  bg-top-panel-tab-enabled text-app-white ">
      <div className="flex flex-col gap-4 font-mono">
        <div className="flex flex-col gap-1">
          <Switch
            onChange={() => {
              setEnableSelectedObjectInsights(!enableSelectedObjectInsights);
            }}
            checked={enableSelectedObjectInsights}
            onColor="#2ECC40"
            // onHandleColor="#2693e6"
            handleDiameter={16}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            // activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={16}
            width={32}
            className="react-switch"
            id="material-switch"
          />
          <div>Enable Insights for Selected Objects</div>
        </div>

        {/* <div className="flex flex-col gap-1">
          <div>Object Name:</div>
          <div>{selectedObject ? selectedObject.name : ""}</div>
        </div> */}

        <div className="flex gap-4">
          <div className="w-1/2">Vertex Count</div>
          <div>:</div>
          <div>{insights["vertex-count"]}</div>
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">Triangle Count</div>
          <div>:</div>
          <div>{insights["triangle-count"]}</div>
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">Geometry Count</div>
          <div>:</div>
          <div>{insights["mesh-count"]}</div>
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">Texture Count</div>
          <div>:</div>
          <div>{insights["texture-count"]}</div>
        </div>
      </div>
    </div>
  );
};

export default BottomPanel;
