import { useGlobalStore } from "@/renderer/store/store";
import React from "react";
import ToggleSwitch from "@components/ui/toggle-switch";

const InsightsView: React.FC<{ selectedTab: string; title: string }> = ({
  selectedTab,
  title,
}) => {
  const {
    insights,
    selectedObject,
    enableSelectedObjectInsights,
    setEnableSelectedObjectInsights,
  } = useGlobalStore();

  return (
    <div
      className={`w-full h-full bg-top-panel-tab-enabled rounded p-6 ${
        selectedTab == title ? "flex flex-col gap-1" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-4 font-mono">
        <div className="flex flex-col gap-1">
          <ToggleSwitch
            checked={enableSelectedObjectInsights}
            onChange={() => {
              setEnableSelectedObjectInsights(!enableSelectedObjectInsights);
            }}
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

export default InsightsView;
