import ToggleSwitch from "@/renderer/components/ui/toggle-switch";
import React from "react";

const ToggleExportMenu: React.FC<{
  checked: any;
  onChange: any;
  label: string;
}> = ({ checked, onChange, label }) => {
  return (
    <div className="w-full flex gap-4 justify-start items-center">
      <ToggleSwitch checked={checked} onChange={onChange} />
      {label}
    </div>
  );
};

export default ToggleExportMenu;
