import React, { useEffect, useRef, useState } from "react";

import { APP_COLOR_SCHEME } from "@config/color-scheme";
import { Grid, TransformControls } from "@react-three/drei";
import { ColorRepresentation, DoubleSide } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useGlobalStore } from "@/renderer/store/store";

import * as THREE from "three";

const GridWrapper: React.FC<{}> = () => {
  const { gridVisibility } = useGlobalStore();
  const { camera, scene, raycaster } = useThree();
  const ref = useRef<any>();
  const maxCellSize = 64;
  const minFadeDistance = 64;
  const maxFadeDistance = 2048;
  const minDistanceThresh = 8;
  const maxDistanceThresh = 128;
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

    const mappedValue = map(
      distance,
      minDistanceThresh,
      maxDistanceThresh,
      minFadeDistance,
      maxFadeDistance
    );
    if (distance <= maxDistanceThresh / 32) {
      setUniforms(
        maxCellSize / 32,
        maxCellSize / 16,
        minFadeDistance,
        fadeStrength
      );
    } else if (distance <= maxDistanceThresh / 16) {
      setUniforms(maxCellSize / 16, maxCellSize / 8, mappedValue, fadeStrength);
    } else if (distance <= maxDistanceThresh / 8) {
      setUniforms(maxCellSize / 8, maxCellSize / 4, mappedValue, fadeStrength);
    } else if (distance <= maxDistanceThresh / 2) {
      setUniforms(maxCellSize / 4, maxCellSize / 2, mappedValue, fadeStrength);
    } else if (distance <= maxDistanceThresh) {
      setUniforms(maxCellSize / 2, maxCellSize, mappedValue, fadeStrength);
    } else {
      setUniforms(maxCellSize, maxCellSize * 2, maxFadeDistance, fadeStrength);
    }
  });
  return (
    <Grid
      ref={ref}
      args={[maxSize, maxSize]}
      cellColor={APP_COLOR_SCHEME["viewport-grid-color"] as ColorRepresentation}
      sectionColor={
        APP_COLOR_SCHEME["viewport-grid-color"] as ColorRepresentation
      }
      cellSize={maxCellSize}
      cellThickness={0.5}
      fadeDistance={maxFadeDistance}
      sectionSize={maxCellSize * 2}
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
