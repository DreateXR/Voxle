import React, { useEffect, useRef, useState } from "react";

import { APP_COLOR_SCHEME } from "@config/color-scheme";
import { Grid, TransformControls } from "@react-three/drei";
import { ColorRepresentation, DoubleSide } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useGlobalStore } from "@/renderer/store/store";

import { setIgnoreRaycastFlag } from "@/renderer/lib/raycast";

import * as THREE from "three";

const GridWrapper: React.FC<{}> = () => {
  const { gridVisibility } = useGlobalStore();
  const { camera, scene, raycaster } = useThree();
  const ref = useRef<any>();
  const cellSize = [1, 2, 4, 8, 16, 32, 64];
  const distanceThresh = [4, 8, 16, 32, 64, 128];
  const minFadeDistance = 64;
  const maxFadeDistance = 2048;
  const fadeStrength = 2;
  const maxSize = 6400;

  const map = (
    number: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ) => {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  const setUniforms = (
    cellSize: number,
    sectionSize: number,
    fadeDistance: number,
    fadeStrength: number
  ) => {
    ref.current.material.uniforms.cellSize.value = cellSize;
    ref.current.material.uniforms.sectionSize.value = sectionSize;
    ref.current.material.uniforms.fadeDistance.value = fadeDistance;
    ref.current.material.uniforms.fadeStrength.value = fadeStrength;
  };

  useFrame(() => {
    // Set the ray's origin to the camera's position
    raycaster.set(
      camera.position,
      camera.getWorldDirection(new THREE.Vector3())
    );

    // Define the XZ plane using a Plane geometry
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // Y = 0 defines the XZ plane

    // Find the intersection
    const intersectionPoint = new THREE.Vector3();
    const isIntersecting = raycaster.ray.intersectPlane(
      plane,
      intersectionPoint
    );

    let distance;
    if (isIntersecting) {
      distance = camera.position.distanceTo(intersectionPoint);
    } else {
      distance = 999;
    }

    if (!ref.current) return;

    // console.log(distance);
    const mappedValue = map(
      distance,
      distanceThresh[0],
      distanceThresh[5],
      minFadeDistance,
      maxFadeDistance
    );
    if (distance <= distanceThresh[0]) {
      setUniforms(cellSize[0], cellSize[0] * 2, minFadeDistance, fadeStrength);
    } else if (distance <= distanceThresh[1]) {
      setUniforms(cellSize[1], cellSize[1] * 2, mappedValue, fadeStrength);
    } else if (distance <= distanceThresh[2]) {
      setUniforms(cellSize[2], cellSize[2] * 2, mappedValue, fadeStrength);
    } else if (distance <= distanceThresh[3]) {
      setUniforms(cellSize[3], cellSize[3] * 2, mappedValue, fadeStrength);
    } else if (distance <= distanceThresh[4]) {
      setUniforms(cellSize[4], cellSize[4] * 2, mappedValue, fadeStrength);
    } else if (distance <= distanceThresh[5]) {
      setUniforms(cellSize[5], cellSize[5] * 2, mappedValue, fadeStrength);
    } else {
      setUniforms(cellSize[6], cellSize[6] * 2, maxFadeDistance, fadeStrength);
    }
  });

  useEffect(() => {
    setIgnoreRaycastFlag(ref);
  }, [ref, ref.current]);
  return (
    <Grid
      ref={ref}
      args={[maxSize, maxSize]}
      cellColor={APP_COLOR_SCHEME["viewport-grid-color"] as ColorRepresentation}
      sectionColor={
        APP_COLOR_SCHEME["viewport-grid-color"] as ColorRepresentation
      }
      cellSize={cellSize[6]}
      cellThickness={0.5}
      fadeDistance={maxFadeDistance}
      sectionSize={cellSize[6] * 2}
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
