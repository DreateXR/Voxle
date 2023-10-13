import Outliner from "@/renderer/components/inspector/outliner";
import React from "react";

const Inspector: React.FC<{ className: string }> = ({ className }) => {
  return (
    <main className={className}>
      <div className="w-full h-1/2 bg-app-base-color p-1">
        <Outliner />
      </div>
      <div className="w-full h-1/2 bg-app-base-color"></div>
    </main>
  );
};

export default Inspector;
