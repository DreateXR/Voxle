// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";
import fs from "fs";
import path from "path";

contextBridge.exposeInMainWorld("electronAPI", {
  getInitFile: () => ipcRenderer.invoke("init-file-info"),
  convertToJsx: (config: any) =>
    ipcRenderer.send("convert-model-to-jsx", config),
  selectFolder: () => ipcRenderer.invoke("open-folder-dialog"),
  getAppConfiguration: (key: string) =>
    ipcRenderer.invoke("get-app-configuration", key),
  joinPath: (a: string, b: string) => path.join(a, b),
  fsWriteSync: (path: string, data: any) => fs.writeFileSync(path, data),
});
