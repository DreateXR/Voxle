import { useGlobalStore } from "@store/store";

const fileUploader = (event: any) => {
  const fileInfo = event.target.files[0];
  useGlobalStore.setState({ pendingFileList: fileInfo });
};

export { fileUploader };
