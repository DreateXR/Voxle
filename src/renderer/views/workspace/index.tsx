import WorkspaceTab from "@/renderer/components/workspace/workspace-tab";
import React, { useState } from "react";
import InspectorView from "@/renderer/components/workspace/inspector-view";
import InsightsView from "@/renderer/components/workspace/insights-view";

const Workspace: React.FC<{ className: string }> = ({ className }) => {
  const [selectedTab, setSelectedTab] = useState("Inspector");
  return (
    <div className={className}>
      <div className="w-full flex px-2 ">
        <WorkspaceTab
          title="Inspector"
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <WorkspaceTab
          title="Insights"
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <div className="w-full grow flex">
        <InspectorView selectedTab={selectedTab} title="Inspector" />
        <InsightsView selectedTab={selectedTab} title="Insights" />
      </div>
    </div>
  );
};

export default Workspace;
