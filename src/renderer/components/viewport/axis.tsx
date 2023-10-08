import { useGlobalStore } from "@/renderer/store/store";
import { TransformControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";

import * as THREE from "three";

const Axis: React.FC<{}> = () => {
  const { axisVisibility } = useGlobalStore();
  const { camera } = useThree();
  const ref = useRef<THREE.Mesh>();
  const xRef = useRef<THREE.ArrowHelper>();
  const yRef = useRef<THREE.ArrowHelper>();
  const zRef = useRef<THREE.ArrowHelper>();

  const directions = useMemo(
    () => ({
      x: new THREE.Vector3(1, 0, 0),
      y: new THREE.Vector3(0, 1, 0),
      z: new THREE.Vector3(0, 0, 1),
      w: new THREE.Vector3(0, 0, 0),
    }),
    []
  );

  useFrame(() => {
    if (!ref) {
      return;
    }

    const distance = camera.position.distanceTo(ref.current.position) / 8;
    if (xRef.current)
      xRef.current.setLength(distance, 0.2 * distance, 0.08 * distance);
    if (yRef.current)
      yRef.current.setLength(distance, 0.2 * distance, 0.08 * distance);
    if (zRef.current)
      zRef.current.setLength(distance, 0.2 * distance, 0.08 * distance);
  });

  useEffect(() => {
    // console.log(ref.current.children[0]);
    ref.current.traverse((child: any) => {
      if (child.material) {
        child.renderOrder = 999;
        child.material.depthTest = false;
        child.material.depthWrite = false;
        // console.log(child.material);
      }
    });
  }, [ref, xRef, yRef, zRef]);

  return (
    <mesh ref={ref} position={[0, 0, 0]} visible={axisVisibility}>
      <arrowHelper
        ref={xRef}
        args={[directions.x, directions.w, 1, 0xff4136]}
      />
      <arrowHelper
        ref={yRef}
        args={[directions.y, directions.w, 1, 0x2ecc40]}
      />
      <arrowHelper
        ref={zRef}
        args={[directions.z, directions.w, 1, 0x0074d9]}
      />
    </mesh>
  );
};

export default Axis;
