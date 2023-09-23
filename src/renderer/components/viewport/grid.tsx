import React, { useEffect } from "react";

import { APP_COLOR_SCHEME } from "@config/color-scheme";
import { Grid } from "@react-three/drei";
import { ColorRepresentation, DoubleSide } from "three";

const GridWrapper: React.FC<{}> = () => {
  const gridParam = {
    cellSize: 50,
    cellThickness: 0.5,
    sectionSize: 100,
    sectionThickness: 1,
    fadeDistance: 4000,
    fadeStrength: 4,
  };
  return (
    <>
      <Grid
        args={[5000, 5000]}
        cellColor={
          APP_COLOR_SCHEME["viewport-grid-color"] as ColorRepresentation
        }
        sectionColor={
          APP_COLOR_SCHEME["viewport-grid-color"] as ColorRepresentation
        }
        cellSize={gridParam.cellSize}
        cellThickness={gridParam.cellThickness}
        fadeDistance={gridParam.fadeDistance}
        sectionSize={gridParam.sectionSize}
        sectionThickness={gridParam.sectionThickness}
        fadeStrength={gridParam.fadeStrength}
        followCamera
        side={DoubleSide}
      />
    </>
  );
};

export default GridWrapper;
