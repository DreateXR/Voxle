import React, { useEffect, useRef } from "react";
import { addEffect, addAfterEffect } from "@react-three/fiber";

import { createRoot } from "react-dom/client";

const Stats: React.FC<{}> = () => {
  const fpsRef = useRef(null);
  const msRef = useRef(null);
  const memRef = useRef(null);

  let beginTime = (performance || Date).now();
  let prevTime = beginTime;
  let frameCount = 0;

  useEffect(() => {
    const begin = addEffect(() => {
      beginTime = (performance || Date).now();
    });
    const end = addAfterEffect(() => {
      frameCount++;
      let time = (performance || Date).now();
      msRef.current.innerHTML = `${Math.round(time - beginTime)} MS`;

      if (time >= prevTime + 1000) {
        fpsRef.current.innerHTML = `${Math.round(
          (frameCount * 1000) / (time - prevTime)
        )} FPS`;
        // console.log(Math.round((frameCount * 1000) / (time - prevTime)));
        prevTime = time;
        frameCount = 0;

        memRef.current.innerHTML = `${Math.round(
          performance.memory.totalJSHeapSize / 1048576
        )} MB`;
      }
      beginTime = time;
    });
    return () => {
      begin();
      end();
    };
  }, []);
  return (
    <div className="absolute bottom-0 flex left-0 bg-app-border-color py-2 rounded-tr pointer-events-none text-sm font-mono bg-opacity-50 text-app-white">
      <div
        ref={fpsRef}
        className="w-20 border-r flex justify-center items-center"
      >
        0 FPS
      </div>
      <div
        ref={msRef}
        className="w-20 border-x flex justify-center items-center"
      >
        0 MS
      </div>
      <div
        ref={memRef}
        className="w-20 border-l flex justify-center items-center"
      >
        0 MB
      </div>
    </div>
  );
};

const StatsWrapper: React.FC<{}> = () => {
  useEffect(() => {
    const statsElement = document.createElement("div");
    document.body.appendChild(statsElement);
    const root = createRoot(statsElement);
    root.render(<Stats />);
  }, []);
  return null;
};

export default StatsWrapper;
