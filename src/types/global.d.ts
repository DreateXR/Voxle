// src/global.d.ts
interface Performance {
  memory: any;
  measureUserAgentSpecificMemory: () => number;
}
interface Window {
  electronAPI: {
    getInitFile: () => Promise<string>; // Replace 'void' with the return type of 'ipcRenderer.send("get-file-data")' if applicable
  };
}

declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;
