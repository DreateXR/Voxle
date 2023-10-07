import React, { useEffect, useState } from "react";

import { APP_COLOR_SCHEME } from "@config/color-scheme";
import { Grid, TransformControls } from "@react-three/drei";
import { ColorRepresentation, DoubleSide } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useGlobalStore } from "@/renderer/store/store";

const GridWrapper: React.FC<{}> = () => {
  const [cellSize, setCellSize] = useState(64);
  const [fadeStrength, setFadeStrength] = useState(8);
  const { gridVisibility } = useGlobalStore();
  // const gridParam = {
  //   cellSize: cellSize,
  //   cellThickness: 0.5,
  //   sectionSize: cellSize * 2,
  //   sectionThickness: 1,
  //   fadeDistance: cellSize * 80,
  //   fadeStrength: fadeStrength,
  // };
  const { camera, scene } = useThree();

  useEffect(() => {
    console.log(scene.children);
  }, [scene.children]);

  useFrame(() => {
    let cameraPosition = Math.abs(camera.position.y);
    // console.log(camera);
    if (cameraPosition <= 4) {
      setCellSize(2);
      setFadeStrength(1);
    } else if (cameraPosition <= 8) {
      setCellSize(4);
      setFadeStrength(2);
    } else if (cameraPosition <= 16) {
      setCellSize(8);
      setFadeStrength(4);
    } else if (cameraPosition <= 32) {
      setCellSize(16);
      setFadeStrength(2);
    } else if (cameraPosition <= 64) {
      setCellSize(32);
      setFadeStrength(4);
    } else {
      setCellSize(64);
      setFadeStrength(8);
    }
  });
  return (
    <Grid
      args={[cellSize * 100, cellSize * 100]}
      cellColor={APP_COLOR_SCHEME["viewport-grid-color"] as ColorRepresentation}
      sectionColor={
        APP_COLOR_SCHEME["viewport-grid-color"] as ColorRepresentation
      }
      cellSize={cellSize}
      cellThickness={0.5}
      fadeDistance={cellSize * 80}
      sectionSize={cellSize * 2}
      sectionThickness={1}
      fadeStrength={fadeStrength}
      followCamera
      side={DoubleSide}
      raycast={() => {}}
      visible={gridVisibility}
    />
  );
};

export default GridWrapper;
