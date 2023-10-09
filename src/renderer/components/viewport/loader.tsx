import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import loader from "@lib/loaders/loaders";
import { enableFileDropEventListener } from "@/renderer/lib/file/drop-file";
import { initFileLoader } from "@/renderer/lib/file/init-file";
import { useGlobalStore } from "@/renderer/store/store";

const Loader: React.FC<{}> = () => {
  const { pendingFileList, setAssetLoadingInProgress, setPendingFileList } =
    useGlobalStore();
  const { scene } = useThree();
  useEffect(() => {
    initFileLoader();
    enableFileDropEventListener();
  }, []);
  useEffect(() => {
    console.log(pendingFileList);
    if (pendingFileList) {
      setAssetLoadingInProgress(true);
      loader(pendingFileList, scene, () => {
        setPendingFileList(null);
        setAssetLoadingInProgress(false);
      });
    }
  }, [pendingFileList]);
  return null;
};

export default Loader;
