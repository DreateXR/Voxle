import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const fbxLoader = (fileInfo: any, scene: any) => {
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
    },
    undefined,
    (error) => {
      console.log(error);
    }
  );
};

export default fbxLoader;
