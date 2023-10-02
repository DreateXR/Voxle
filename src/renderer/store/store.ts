import { create } from "zustand";

type GlobalStore = {
  assetLoadingInProgress: boolean;
  pendingFileList: any;
  setAssetLoadingInProgress: (assetLoadingInProgress: boolean) => void;
  setPendingFileList: (pendingFileList: any) => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
  assetLoadingInProgress: false,
  pendingFileList: null,
  setAssetLoadingInProgress: (assetLoadingInProgress) =>
    set({ assetLoadingInProgress }),
  setPendingFileList: (pendingFileList) => set({ pendingFileList }),
}));
