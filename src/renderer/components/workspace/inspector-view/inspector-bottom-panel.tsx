import { useGlobalStore } from "@/renderer/store/store";
import Properties from "./properties";
import { useState } from "react";
import InspectorTab from "./inspector-tab";
import PropertiesTab from "./properties/properties-tab";
import ExportJsxTab from "./export-jsx/export-jsx-tab";
import ModifiersTab from "./modifiers/modifiers";
import DragIcon from "./drag-icon";

const InspectorBottomPanel = () => {
  const [tab, setTab] = useState("properties-tab");
  return (
    <div className="w-full max-h-1/2 h-1/2 flex justify-start rounded overflow-hidden">
      <div className="h-full max-w-8 w-8 bg-[#262626]">
        <DragIcon />
        <PropertiesTab
          title="properties-tab"
          selectedTab={tab}
          setSelectedTab={setTab}
        />
        <ModifiersTab
          title="modifiers-tab"
          selectedTab={tab}
          setSelectedTab={setTab}
        />
        <ExportJsxTab
          title="export-jsx-tab"
          selectedTab={tab}
          setSelectedTab={setTab}
        />
      </div>
      <div className="shrink grow basis-0 h-full bg-top-panel-tab-enabled">
        <Properties selectedTab={tab} title="properties-tab" />
      </div>
    </div>
  );
};

export default InspectorBottomPanel;
