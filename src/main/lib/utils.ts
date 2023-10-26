import os from "os";
import fs from "fs";

const createTmpFolder = () => {
  const tmpDirectory = os.tmpdir() + "/voxle";
  console.log(tmpDirectory);
  if (fs.existsSync(tmpDirectory)) {
    return;
  }
  try {
    fs.mkdirSync(tmpDirectory);
    return tmpDirectory;
  } catch (e) {
    console.log(e);
    return;
  }
};

const cleanupTmp = (tmpDirectory: any) => {
  try {
    fs.rmdirSync(tmpDirectory);
  } catch (e) {
    console.log(e);
  }
};

export { createTmpFolder, cleanupTmp };
