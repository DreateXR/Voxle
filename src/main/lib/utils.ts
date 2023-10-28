import os from "os";
import fs from "fs";
import path from "path";

import { getStore, setStore, deleteStore } from "../store/store";

const createTmpFolder = () => {
  const tmpDirectory = path.join(os.tmpdir(), "voxle");

  console.log(tmpDirectory, os.homedir());
  setStore("temp-folder", tmpDirectory);
  if (fs.existsSync(tmpDirectory)) {
    return;
  }
  try {
    fs.mkdirSync(tmpDirectory);
  } catch (e) {
    console.log(e);
  }
};

const cleanupTmp = () => {
  const tmpDirectory: any = getStore("temp-folder");
  console.log(tmpDirectory);
  try {
    if (tmpDirectory) {
      deleteStore("temp-folder");
      fs.rmdirSync(tmpDirectory);
    }
  } catch (e) {
    console.log(e);
  }
};

export { createTmpFolder, cleanupTmp };
