import gltfLoader from "./gltfLoader";
import fbxLoader from "./fbxLoader";

const loaderList: {
  glb: (fileInfo: any, scene: any, cleanup: (model?: any) => void) => void;
  gltf: (fileInfo: any, scene: any, cleanup: (model?: any) => void) => void;
  fbx: (fileInfo: any, scene: any, cleanup: (model?: any) => void) => void;
  [key: string]:
    | ((fileInfo: any, scene: any, cleanup: (model?: any) => void) => void)
    | undefined;
} = {
  glb: gltfLoader,
  gltf: gltfLoader,
  fbx: fbxLoader,
};

const loader = (fileInfo: any, scene: any, cleanup: () => void) => {
  const extension = fileInfo.name.split(".").pop();
  const validExtensionList = Object.keys(loaderList);
  if (validExtensionList.includes(extension)) {
    loaderList[extension](fileInfo, scene, cleanup);
  } else {
    cleanup();
  }
};

export default loader;
