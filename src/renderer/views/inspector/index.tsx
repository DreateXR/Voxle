import TopPanel from "@/renderer/components/inspector/top-panel";
import React from "react";

const Inspector: React.FC<{ className: string }> = ({ className }) => {
  return (
    <main className={className}>
      <TopPanel />

      <div className="w-full h-2/5 bg-app-base-color rounded"></div>
    </main>
  );
};

export default Inspector;
