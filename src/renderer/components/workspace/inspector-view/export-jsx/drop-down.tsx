import { APP_COLOR_SCHEME } from "@config/color-scheme";
import React, { useState } from "react";

const DropDown: React.FC<{
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}> = ({ isExpanded, setIsExpanded }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative h-full aspect-square cursor-pointer p-1"
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${isExpanded ? "rotate-90" : "rotate-0"}`}
      >
        <path
          fill={
            hover
              ? APP_COLOR_SCHEME["app-white-in-focus"]
              : APP_COLOR_SCHEME["app-white-out-of-focus"]
          }
          d="M8,5.14V19.14L19,12.14L8,5.14Z"
        />
      </svg>
    </div>
  );
};

export default DropDown;
