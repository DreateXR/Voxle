import { GLTFExporter } from "three-stdlib";
import * as THREE from "three";
import clonedeep from "lodash.clonedeep";

const writeToTemp = async (assetList: any, filePath: string, key: string) => {
  const clonedAssetList = clonedeep(assetList);
  let scene = new THREE.Scene();
  clonedAssetList.map((asset: any) => {
    scene.add(asset);
  });
  const exporter = new GLTFExporter();
  exporter.parse(
    scene,
    async (gltf) => {
      const tempPath = window.electronAPI.joinPath(filePath, key);
      let buffer;
      if (gltf instanceof ArrayBuffer) {
        buffer = new Uint8Array(gltf);
      }
      console.log(tempPath, gltf);
      window.electronAPI.fsWriteSync(tempPath, buffer);
    },
    (error) => {
      console.log(error);
    },
    { binary: true }
  );
};

export { writeToTemp };
