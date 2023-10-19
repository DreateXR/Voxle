import { useGlobalStore } from "@/renderer/store/store";
import React, { useEffect, useState } from "react";

const ObjectScale = () => {
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
        setX(selectedObject.scale.x.toFixed(3));
        setY(selectedObject.scale.y.toFixed(3));
        setZ(selectedObject.scale.z.toFixed(3));
      }
    }
  }, [
    selectedObject,
    selectedObject?.scale.x,
    selectedObject?.scale.y,
    selectedObject?.scale.z,
  ]);
  return (
    <div className="w-full flex flex-col font-mono text-sm gap-1">
      <div className="w-full flex gap-2">
        <div className="w-1/3 flex justify-end">Scale X</div>
        <div>:</div>
        <input
          className="w-1/3 rounded border-app-white-disable border-[0.5px] bg-top-panel-tab-disabled pl-1"
          value={x}
          onChange={(e) => {
            const x = e.target.value;
            if (/^(\d+\.?\d*|\.\d+)?$/.test(x)) {
              if (selectedObject) {
                selectedObject.scale.x = Number(x);
              }
              setX(x);
            }
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
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
                selectedObject.scale.y = Number(y);
              }
              setY(y);
            }
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
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
                selectedObject.scale.z = Number(z);
              }
              setZ(z);
            }
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default ObjectScale;
