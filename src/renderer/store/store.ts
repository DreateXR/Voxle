import { create } from "zustand";

type GlobalStore = {
  assetLoadingInProgress: boolean;
  pendingFileList: any;
  selectedObject: any;
  transformControls: { mode: "translate" | "scale" | "rotate" };
  setAssetLoadingInProgress: (assetLoadingInProgress: boolean) => void;
  setPendingFileList: (pendingFileList: any) => void;
  setSelectedObject: (selectedObject: any) => void;
  setTransformControls: (transformControls: {
    mode: "translate" | "scale" | "rotate";
  }) => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
  assetLoadingInProgress: false,
  pendingFileList: null,
  selectedObject: null,
  transformControls: { mode: "translate" },
  setAssetLoadingInProgress: (assetLoadingInProgress) =>
    set({ assetLoadingInProgress }),
  setPendingFileList: (pendingFileList) => set({ pendingFileList }),
  setSelectedObject: (selectedObject) => set({ selectedObject }),
  setTransformControls: (transformControls: {
    mode: "translate" | "scale" | "rotate";
  }) => set({ transformControls }),
}));
