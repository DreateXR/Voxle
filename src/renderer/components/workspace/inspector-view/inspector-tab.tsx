import { APP_COLOR_SCHEME } from "@config/color-scheme";
import VOXLE_TOOLTIP from "@config/tooltip";
import React, { ReactNode, useEffect, useState } from "react";

const InspectorTab: React.FC<{
  title: string;
  selected: string;
  setSelected: (selectedTab: string) => void;
  setHover: (hover: boolean) => void;
  children: ReactNode;
}> = ({ title, selected, setSelected, children, setHover }) => {
  return (
    <div
      className={`relative w-full aspect-square cursor-pointer p-1.5 ${
        selected == title ? "bg-top-panel-tab-enabled" : "bg-[#262626]"
      }`}
      data-tooltip-id={VOXLE_TOOLTIP.id}
      data-tooltip-content={VOXLE_TOOLTIP[title as keyof typeof VOXLE_TOOLTIP]}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => {
        setSelected(title);
      }}
    >
      {children}
    </div>
  );
};

export default InspectorTab;
