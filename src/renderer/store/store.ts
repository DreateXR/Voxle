import { create } from "zustand";

type GlobalStore = {
  assetLoadingInProgress: boolean;
  pendingFileList: any;
  selectedObject: any;
  hoverObject: any;
  selectionHighlight: boolean;
  hoverHighlight: boolean;
  selectionMode: "object" | "mesh";
  transformControls: {
    mode: "translate" | "scale" | "rotate";
    space: "world" | "local";
  };
  gridVisibility: boolean;
  axisVisibility: boolean;
  assetList: any;
  setAssetLoadingInProgress: (assetLoadingInProgress: boolean) => void;
  setPendingFileList: (pendingFileList: any) => void;
  setSelectedObject: (selectedObject: any) => void;
  setHoverObject: (hoverObject: any) => void;
  setSelectionHighlight: (selectionHighlight: boolean) => void;
  setHoverHighlight: (hoverHighlight: boolean) => void;
  setSelectionMode: (selectionMode: "object" | "mesh") => void;
  setTransformControls: (transformControls: {
    mode: "translate" | "scale" | "rotate";
    space: "world" | "local";
  }) => void;
  setGridVisibility: (gridVisibilty: boolean) => void;
  setAxisVisibility: (axesVisibility: boolean) => void;
  setAssetList: (assetList: any) => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
  assetLoadingInProgress: false,
  pendingFileList: null,
  selectedObject: null,
  hoverObject: null,
  selectionHighlight: false,
  hoverHighlight: true,
  selectionMode: "object",
  gridVisibility: true,
  transformControls: { mode: "translate", space: "world" },
  axisVisibility: true,
  assetList: [],
  setAssetLoadingInProgress: (assetLoadingInProgress) =>
    set({ assetLoadingInProgress }),
  setPendingFileList: (pendingFileList) => set({ pendingFileList }),
  setSelectedObject: (selectedObject) => set({ selectedObject }),
  setHoverObject: (hoverObject) => set({ hoverObject }),
  setSelectionHighlight: (selectionHighlight) => set({ selectionHighlight }),
  setHoverHighlight: (hoverHighlight) => set({ hoverHighlight }),
  setSelectionMode: (selectionMode) => set({ selectionMode }),
  setTransformControls: (transformControls: {
    mode: "translate" | "scale" | "rotate";
    space: "world" | "local";
  }) => set({ transformControls }),
  setGridVisibility: (gridVisibility) => set({ gridVisibility }),
  setAxisVisibility: (axisVisibility) => set({ axisVisibility }),
  setAssetList: (assetList) => set({ assetList }),
}));
