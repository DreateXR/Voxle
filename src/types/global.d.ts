// src/global.d.ts
interface Performance {
  memory: any;
  measureUserAgentSpecificMemory: () => number;
}
interface Window {
  electronAPI: {
    getInitFile: () => Promise<string>; // Replace 'void' with the return type of 'ipcRenderer.send("get-file-data")' if applicable
    convertToJsx: (config: any) => Promise<boolean>;
    selectFolder: () => Promise<any>;
    getAppConfiguration: (key: string) => Promise<any>;
    joinPath: (a: string, b: string) => string;
    fsWriteSync: (path: string, data: any) => any;
  };
  showDirectoryPicker?: () => Promise<FileSystemDirectoryHandle>;
}

declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;
