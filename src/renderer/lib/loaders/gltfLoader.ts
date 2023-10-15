import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { SUCCESS, FAILURE } from "@config/constants";
const gltfLoader = (
  fileInfo: any,
  scene: any,
  cleanup: (error: { code: number; message: string }, model?: any) => void
) => {
  const fileName = fileInfo.name;
  const filePath = fileInfo.path;
  const loader = new GLTFLoader();
  loader.setResourcePath(filePath.split(fileName)[0]);
  loader.load(
    filePath,
    (gltf) => {
      // console.log(gltf);
      scene.add(gltf.scene);
      cleanup(
        { code: SUCCESS, message: "File loaded successfully !!" },
        gltf.scene
      );
    },
    undefined,
    (error: any) => {
      cleanup({ code: FAILURE, message: error.message });
    }
  );
};

export default gltfLoader;
