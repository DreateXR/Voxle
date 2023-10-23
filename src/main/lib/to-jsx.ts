import fs from "fs";
import path from "path";

const toArrayBuffer = (buf: any) => {
  let arrayBuffer = new ArrayBuffer(buf.length);
  let view = new Uint8Array(arrayBuffer);
  for (let i = 0; i < buf.length; ++i) {
    view[i] = buf[i];
  }
  return arrayBuffer;
};

const roundOff = (value: number) => {
  return Math.round(value * 100) / 100;
};

const getFileSize = (file: any) => {
  const stats = fs.statSync(file);
  const fileSize = stats.size;
  const fileSizeKB = roundOff(fileSize * 0.001);
  const fileSizeMB = roundOff(fileSizeKB * 0.001);
  return {
    size: fileSizeMB,
    sizeMB: fileSizeMB,
    sizeKB: fileSizeKB,
  };
};

const getRelativeFilePath = (file: any, root: any) => {
  const filePath = path.resolve(file);
  const rootPath = root ? path.resolve(root) : path.dirname(file);
  const relativePath = path.relative(rootPath, filePath) || "";
  if (process.platform === "win32") return relativePath.replace(/\\/g, "/");
  return relativePath;
};

const convertToJsx = (gltf: any, config: { filepath: string; size: any }) => {
  console.log(gltf);
  // cleanup gltf
  //   if (gltf.isScene) {
  //     gltf = { scene: gltf.scene, animations: [], parser: { json: {} } };
  //   } else if (gltf.isObject3D) {
  //     // Wrap scene in a GLTF Structure
  //     gltf = { scene: gltf, animations: [], parser: { json: {} } };
  //   }
  //   const url = config.filepath;
  //   const animations = gltf.animations;
  //   const hasAnimation = animations.length > 0;

  //   const objects = [];
};

export {
  toArrayBuffer,
  roundOff,
  getRelativeFilePath,
  getFileSize,
  convertToJsx,
};
