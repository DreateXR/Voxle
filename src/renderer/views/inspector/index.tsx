import BottomPanel from "@/renderer/components/inspector/bottom-panel";
import TopPanel from "@/renderer/components/inspector/top-panel";
import React from "react";

const Inspector: React.FC<{ className: string }> = ({ className }) => {
  return (
    <main className={className}>
      <TopPanel />
      <BottomPanel />
    </main>
  );
};

export default Inspector;
