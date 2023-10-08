import { create } from "zustand";

type GlobalStore = {
  assetLoadingInProgress: boolean;
  pendingFileList: any;
  selectedObject: any;
  selectionMode: "object" | "mesh";
  transformControls: { mode: "translate" | "scale" | "rotate" };
  gridVisibility: boolean;
  axisVisibility: boolean;
  setAssetLoadingInProgress: (assetLoadingInProgress: boolean) => void;
  setPendingFileList: (pendingFileList: any) => void;
  setSelectedObject: (selectedObject: any) => void;
  setSelectionMode: (selectionMode: "object" | "mesh") => void;
  setTransformControls: (transformControls: {
    mode: "translate" | "scale" | "rotate";
  }) => void;
  setGridVisibility: (gridVisibilty: boolean) => void;
  setAxisVisibility: (axesVisibility: boolean) => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
  assetLoadingInProgress: false,
  pendingFileList: null,
  selectedObject: null,
  selectionMode: "object",
  gridVisibility: true,
  transformControls: { mode: "translate" },
  axisVisibility: true,
  setAssetLoadingInProgress: (assetLoadingInProgress) =>
    set({ assetLoadingInProgress }),
  setPendingFileList: (pendingFileList) => set({ pendingFileList }),
  setSelectedObject: (selectedObject) => set({ selectedObject }),
  setSelectionMode: (selectionMode) => set({ selectionMode }),
  setTransformControls: (transformControls: {
    mode: "translate" | "scale" | "rotate";
  }) => set({ transformControls }),
  setGridVisibility: (gridVisibility) => set({ gridVisibility }),
  setAxisVisibility: (axisVisibility) => set({ axisVisibility }),
}));
