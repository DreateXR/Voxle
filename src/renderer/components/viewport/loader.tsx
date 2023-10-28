import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import loader from "@lib/loaders/loaders";
import { enableFileDropEventListener } from "@/renderer/lib/file/drop-file";
import { initFileLoader } from "@/renderer/lib/file/init-file";
import { useGlobalStore } from "@/renderer/store/store";
import { sendNotification } from "@/renderer/lib/notification";

const Loader: React.FC<{}> = () => {
  const {
    pendingFileList,
    setAssetLoadingInProgress,
    setPendingFileList,
    assetList,
    setAssetList,
    setScene,
  } = useGlobalStore();
  const { scene } = useThree();
  useEffect(() => {
    initFileLoader();
    enableFileDropEventListener();
  }, []);
  useEffect(() => {
    console.log(pendingFileList);
    if (pendingFileList) {
      setAssetLoadingInProgress(true);
      loader(
        pendingFileList,
        scene,
        (error: { code: number; message: string }, model?: any) => {
          if (model) {
            setAssetList([...assetList, model]);
            setScene(scene);
          }
          setPendingFileList(null);
          setAssetLoadingInProgress(false);
          sendNotification(error.code, error.message, 5000);
        }
      );
    }
  }, [pendingFileList]);
  return null;
};

export default Loader;
