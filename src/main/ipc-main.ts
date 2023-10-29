import { ipcMain, dialog } from "electron";
import os from "os";
import { convertToJsx } from "./lib/export-to-jsx";
import { getStore } from "./store/store";

const initializeIPC = () => {
  ipcMain.handle("init-file-info", () => {
    let data = null;

    // For Windows
    if (process.platform == "win32" && process.argv.length >= 2) {
      let openFilePath = process.argv[1];
      data = openFilePath;
    }

    // For macOS and Linux
    else if (
      (process.platform === "darwin" || process.platform === "linux") &&
      process.argv.length >= 2
    ) {
      let openFilePath = process.argv[1];
      // Check if the file path is not an Electron flag (e.g., --no-sandbox)
      if (!openFilePath.startsWith("--")) {
        data = openFilePath;
      }
    }

    return data;
  });

  ipcMain.on("convert-model-to-jsx", (event: any, config: any) => {
    console.log("haha", config);
    console.log(os.tmpdir());
    convertToJsx(config.model, config);
    return "hi";
  });

  ipcMain.handle("open-folder-dialog", () => {
    const result = dialog.showOpenDialogSync({
      properties: ["openDirectory"], // allows selecting directories
    });

    if (result.length > 0) {
      return result[0];
    }
    return "";
  });

  ipcMain.handle("get-app-configuration", (event: any, key: string) => {
    console.log(key);
    const value = getStore(key);
    console.log(value);
    if (value) {
      return value;
    }
    return null;
  });
};

export default initializeIPC;
