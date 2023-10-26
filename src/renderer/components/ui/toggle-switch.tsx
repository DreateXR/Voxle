import React from "react";
import Switch from "react-switch";

const ToggleSwitch: React.FC<{ checked: any; onChange: any }> = ({
  checked,
  onChange,
}) => {
  return (
    <Switch
      onChange={onChange}
      checked={checked}
      onColor="#2ECC40"
      // onHandleColor="#2693e6"
      handleDiameter={12}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      // activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={18}
      width={32}
      className="react-switch"
      id="material-switch"
    />
  );
};

export default ToggleSwitch;
