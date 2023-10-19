import { useGlobalStore } from "@/renderer/store/store";
import React, { useEffect, useState } from "react";

const ObjectRotation = () => {
  const { selectedObject } = useGlobalStore();
  const [isFocused, setIsFocused] = useState(false);
  const [x, setX] = useState("0");
  const [y, setY] = useState("0");
  const [z, setZ] = useState("0");

  const handleFocus = () => {
    console.log("isFocused");
    setIsFocused(true);
  };

  const handleBlur = () => {
    console.log("not isFocused");
    setIsFocused(false);
  };

  useEffect(() => {
    if (!isFocused) {
      if (!selectedObject) {
        setX("0");
        setY("0");
        setZ("0");
      } else {
        setX(
          `${((180 * parseFloat(selectedObject.rotation.x)) / Math.PI).toFixed(
            2
          )}`
        );
        setY(
          `${((180 * parseFloat(selectedObject.rotation.y)) / Math.PI).toFixed(
            2
          )}`
        );
        setZ(
          `${((180 * parseFloat(selectedObject.rotation.z)) / Math.PI).toFixed(
            2
          )}`
        );
      }
    }
  }, [
    selectedObject,
    selectedObject?.rotation.x,
    selectedObject?.rotation.y,
    selectedObject?.rotation.z,
  ]);
  return (
    <div className="w-full flex flex-col font-mono text-sm gap-1">
      <div className="w-full flex gap-2">
        <div className="w-1/3 flex justify-end">Rotation X</div>
        <div>:</div>
        <input
          className="w-1/3 rounded border-app-white-disable border-[0.5px] bg-top-panel-tab-disabled pl-1"
          value={x}
          onChange={(e) => {
            const x = e.target.value;
            if (/^(\d+\.?\d*|\.\d+)?$/.test(x)) {
              if (selectedObject) {
                selectedObject.rotation.x = (Math.PI * parseFloat(x)) / 180;
              }
              setX(x);
            }
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div>deg</div>
      </div>
      <div className="w-full flex gap-2">
        <div className="w-1/3 flex justify-end">Y</div>
        <div>:</div>
        <input
          className="w-1/3 rounded border-app-white-disable border-[0.5px] bg-top-panel-tab-disabled pl-1"
          value={y}
          onChange={(e) => {
            const y = e.target.value;
            if (/^(\d+\.?\d*|\.\d+)?$/.test(y)) {
              if (selectedObject) {
                selectedObject.rotation.y = (Math.PI * parseFloat(y)) / 180;
              }
              setY(y);
            }
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div>deg</div>
      </div>
      <div className="w-full flex gap-2">
        <div className="w-1/3 flex justify-end">Z</div>
        <div>:</div>
        <input
          className="w-1/3 rounded border-app-white-disable border-[0.5px] bg-top-panel-tab-disabled pl-1"
          value={z}
          onChange={(e) => {
            const z = e.target.value;
            if (/^(\d+\.?\d*|\.\d+)?$/.test(z)) {
              if (selectedObject) {
                selectedObject.rotation.z = (Math.PI * parseFloat(z)) / 180;
              }
              setZ(z);
            }
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div>deg</div>
      </div>
    </div>
  );
};

export default ObjectRotation;
