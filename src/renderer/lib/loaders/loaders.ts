import gltfLoader from "./gltfLoader";
import fbxLoader from "./fbxLoader";

const loaderList: {
  glb: (fileInfo: any, scene: any) => void;
  gltf: (fileInfo: any, scene: any) => void;
  fbx: (fileInfo: any, scene: any) => void;
  [key: string]: ((fileInfo: any, scene: any) => void) | undefined;
} = {
  glb: gltfLoader,
  gltf: gltfLoader,
  fbx: fbxLoader,
};

const loader = (fileInfo: any, scene: any) => {
  const extension = fileInfo.name.split(".").pop();
  for (const key in loaderList) {
    if (key == extension) {
      loaderList[key](fileInfo, scene);
    }
  }
};

export default loader;
