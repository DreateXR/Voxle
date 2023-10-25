import os from "os";
import fs from "fs";

const createTmpFolder = () => {
  const tmpDirectory = os.tmpdir() + "/voxle";
  console.log(tmpDirectory);
  fs.mkdirSync(tmpDirectory);
  return tmpDirectory;
};

const cleanupTmp = (tmpDirectory: any) => {
  try {
    fs.rmdirSync(tmpDirectory);
  } catch (e) {
    console.log(e);
  }
};

export { createTmpFolder, cleanupTmp };
