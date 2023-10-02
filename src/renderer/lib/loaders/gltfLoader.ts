import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const gltfLoader = (fileInfo: any, scene: any, cleanup: () => void) => {
  const fileName = fileInfo.name;
  const filePath = fileInfo.path;
  const loader = new GLTFLoader();
  loader.setResourcePath(filePath.split(fileName)[0]);
  loader.load(
    filePath,
    (gltf) => {
      // console.log(gltf);
      scene.add(gltf.scene);
      cleanup();
    },
    undefined,
    (error) => {
      console.log(error);
      cleanup();
    }
  );
};

export default gltfLoader;
