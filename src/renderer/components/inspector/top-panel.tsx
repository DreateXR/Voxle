import React, { useState } from "react";
import Outliner from "./outliner";

const TopPanel = () => {
  const [tab, setTab] = useState("Outliner");
  return (
    <div className="w-full h-1/2 flex flex-col rounded">
      <div className="w-full flex px-2 ">
        <div
          className={`font-mono text-sm ${
            tab == "Outliner"
              ? "bg-top-panel-tab-enabled text-app-white"
              : "bg-top-panel-tab-disabled text-app-white-disable"
          } px-2 py-1 rounded-tl-md rounded-tr-md cursor-pointer hover:text-app-white`}
          onClick={() => {
            setTab("Outliner");
          }}
        >
          Outliner
        </div>
        <div
          className={`font-mono text-sm  ${
            tab == "Details"
              ? "bg-top-panel-tab-enabled text-app-white"
              : "bg-top-panel-tab-disabled text-app-white-disable"
          } px-2 py-1 rounded-tl-md rounded-tr-md cursor-pointer hover:text-app-white`}
          onClick={() => {
            setTab("Details");
          }}
        >
          Details
        </div>
      </div>
      <div className="w-full grow overflow-hidden bg-top-panel-tab-enabled rounded">
        {tab == "Outliner" && <Outliner />}
      </div>
    </div>
  );
};

export default TopPanel;
