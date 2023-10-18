import BottomPanel from "@/renderer/components/inspector/outliner-view/outliner-bottom-panel";
import InspectorTab from "@/renderer/components/inspector/inspector-tab";
import TopPanel from "@/renderer/components/inspector/outliner-view/outliner-top-panel";
import React, { useState } from "react";
import OutlinerView from "@/renderer/components/inspector/outliner-view";
import InsightsView from "@/renderer/components/inspector/insights-view";

const Inspector: React.FC<{ className: string }> = ({ className }) => {
  const [selectedTab, setSelectedTab] = useState("Outliner");
  return (
    <div className={className}>
      <div className="w-full flex px-2 ">
        <InspectorTab
          title="Outliner"
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <InspectorTab
          title="Insights"
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <div className="w-full grow flex">
        <OutlinerView selectedTab={selectedTab} title="Outliner" />
        <InsightsView selectedTab={selectedTab} title="Insights" />
      </div>
    </div>
  );
};

export default Inspector;
