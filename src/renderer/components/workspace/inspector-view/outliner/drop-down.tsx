import { APP_COLOR_SCHEME } from "@config/color-scheme";
import React, { useState } from "react";

const DropDown: React.FC<{
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}> = ({ isExpanded, setIsExpanded }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative h-full aspect-square cursor-pointer"
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      {isExpanded ? (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fill={
              hover
                ? APP_COLOR_SCHEME["app-white-in-focus"]
                : APP_COLOR_SCHEME["app-white-out-of-focus"]
            }
            d="M7,15L12,10L17,15H7Z"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fill={
              hover
                ? APP_COLOR_SCHEME["app-white-in-focus"]
                : APP_COLOR_SCHEME["app-white-out-of-focus"]
            }
            d="M7,10L12,15L17,10H7Z"
          />
        </svg>
      )}
    </div>
  );
};

export default DropDown;
