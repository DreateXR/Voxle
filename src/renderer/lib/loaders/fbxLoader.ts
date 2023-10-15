import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { SUCCESS, FAILURE } from "@config/constants";
const fbxLoader = (
  fileInfo: any,
  scene: any,
  cleanup: (error: { code: number; message: string }, model?: any) => void
) => {
  const fileName = fileInfo.name;
  const filePath = fileInfo.path;
  const loader = new FBXLoader();
  let resourcePath = filePath.split(fileName)[0];
  resourcePath = resourcePath.split("source")[0] + "textures\\";
  loader.setResourcePath(resourcePath);
  loader.load(
    filePath,
    (fbx) => {
      scene.add(fbx);
      cleanup({ code: SUCCESS, message: "File loaded successfully !!" }, fbx);
    },
    undefined,
    (error: any) => {
      console.log(error);
      cleanup({ code: FAILURE, message: error.message });
    }
  );
};

export default fbxLoader;
