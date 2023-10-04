import {
  Camera,
  Grid,
  Lights,
  Loader,
  Gizmo,
  Controllers,
} from "@components/viewport";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";

import { Stats } from "@react-three/drei";
import { Stats as Stats1 } from "@components/viewport";

import {
  DepthOfField,
  EffectComposer,
  SMAA,
} from "@react-three/postprocessing";
import { Outline } from "@react-three/postprocessing";

const Viewport: React.FC<{}> = () => {
  return (
    <Canvas
      className="w-full h-full bg-viewport-base-color rounded"
      gl={{ antialias: true, powerPreference: "high-performance" }}
      dpr={1}
    >
      <Loader />
      <Lights />
      <Camera />
      <Stats />
      <Stats1 />
      <Grid />
      <Controllers />
      <Gizmo />
      {/* <EffectComposer multisampling={0}>
        <SMAA />
        <Outline visibleEdgeColor={10} edgeStrength={100} />
      </EffectComposer> */}
    </Canvas>
  );
};

export default Viewport;
