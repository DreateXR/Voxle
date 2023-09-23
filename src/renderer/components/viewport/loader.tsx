import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import loader from "@lib/loaders/loaders";
import { dropEventListener } from "@lib/drop-file";

const Loader: React.FC<{}> = () => {
  const { scene } = useThree();
  useEffect(() => {
    const initLoader = async () => {
      const initFilePath = await window.electronAPI.getInitFile();
      try {
        const fileInfo = {
          name: initFilePath.replace(/^.*[\\\/]/, ""),
          path: initFilePath,
        };
        loader(fileInfo, scene);
      } catch {
        // Error
      }
    };
    initLoader();
    dropEventListener(scene, loader);
  }, []);
  return null;
};

export default Loader;
