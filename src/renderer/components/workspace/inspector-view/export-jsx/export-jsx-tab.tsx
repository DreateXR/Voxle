import React, { useState } from "react";
import InspectorTab from "../inspector-tab";
import { APP_COLOR_SCHEME } from "@config/color-scheme";

const ExportJsxTab: React.FC<{
  title: string;
  selectedTab: string;
  setSelectedTab: (selectedTab: string) => void;
}> = ({ title, selectedTab, setSelectedTab }) => {
  const [hover, setHover] = useState(false);
  return (
    <InspectorTab
      title={title}
      selected={selectedTab}
      setSelected={setSelectedTab}
      setHover={setHover}
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          fill={
            selectedTab == title || hover
              ? APP_COLOR_SCHEME["app-white"]
              : APP_COLOR_SCHEME["app-white-disable"]
          }
          d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z"
        />
      </svg>
    </InspectorTab>
  );
};

export default ExportJsxTab;
