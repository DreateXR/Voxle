import BottomPanel from "@/renderer/components/inspector/outliner/outliner-bottom-panel";
import InspectorTab from "@/renderer/components/inspector/inspector-tab";
import TopPanel from "@/renderer/components/inspector/outliner/outliner-top-panel";
import React, { useState } from "react";
import Outliner from "@/renderer/components/inspector/outliner";

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
        <Outliner selectedTab={selectedTab} />
      </div>
    </div>
  );
};

export default Inspector;
