import loader from "@lib/loaders/loaders";

import { useGlobalStore } from "@store/store";

const initFileLoader = async () => {
  const initFilePath = await window.electronAPI.getInitFile();
  try {
    const fileInfo = {
      name: initFilePath.replace(/^.*[\\\/]/, ""),
      path: initFilePath,
    };
    useGlobalStore.setState({ pendingFileList: fileInfo });
    // loader(fileInfo, scene);
  } catch {
    // Error
    console.log("Error on loader");
  }
};

export { initFileLoader };
