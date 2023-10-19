import React from "react";

const WorkspaceTab: React.FC<{
  title: string;
  selectedTab: string;
  setSelectedTab: (selectedTab: string) => void;
}> = ({ title, selectedTab, setSelectedTab }) => {
  return (
    <div
      className={`font-mono text-sm ${
        selectedTab == title
          ? "bg-top-panel-tab-enabled text-app-white"
          : "bg-top-panel-tab-disabled text-app-white-disable"
      } px-2 py-1 rounded-tl-lg rounded-tr-lg cursor-pointer hover:text-app-white`}
      onClick={() => {
        setSelectedTab(title);
      }}
    >
      {title}
    </div>
  );
};

export default WorkspaceTab;
