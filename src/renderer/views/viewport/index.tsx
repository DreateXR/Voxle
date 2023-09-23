import {
  Camera,
  Grid,
  Lights,
  Loader,
  OrbitControls,
} from "@/renderer/components/viewport";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";

import { Stats } from "@react-three/drei";
import { Stats as Stats1 } from "@/renderer/components/viewport";

const Viewport: React.FC<{}> = () => {
  return (
    <Canvas
      className="w-full h-full bg-viewport-base-color rounded"
      gl={{ powerPreference: "high-performance" }}
      camera={{ position: [3, 1, 0] }}
    >
      {/* <Loader /> */}
      <Lights />
      <Camera />
      <OrbitControls />
      <Stats />
      <Stats1 />
      <Grid />
    </Canvas>
  );
};

export default Viewport;
