import { create } from "zustand";

type GlobalStore = {
  assetLoadingInProgress: boolean;
  pendingFileList: any;
  selectedObject: any;
  hoverObject: any;
  selectionHighlight: boolean;
  hoverHighlight: boolean;
  selectionMode: "object" | "group" | "mesh";
  transformControls: {
    mode: "translate" | "scale" | "rotate";
    space: "world" | "local";
  };
  gridVisibility: boolean;
  axisVisibility: boolean;
  assetList: any;
  enableSelectedObjectInsights: boolean;
  insights: {
    "vertex-count": number;
    "triangle-count": number;
    "mesh-count": number;
    "texture-count": number;
  };
  setAssetLoadingInProgress: (assetLoadingInProgress: boolean) => void;
  setPendingFileList: (pendingFileList: any) => void;
  setSelectedObject: (selectedObject: any) => void;
  setHoverObject: (hoverObject: any) => void;
  setSelectionHighlight: (selectionHighlight: boolean) => void;
  setHoverHighlight: (hoverHighlight: boolean) => void;
  setSelectionMode: (selectionMode: "object" | "group" | "mesh") => void;
  setTransformControls: (transformControls: {
    mode: "translate" | "scale" | "rotate";
    space: "world" | "local";
  }) => void;
  setGridVisibility: (gridVisibilty: boolean) => void;
  setAxisVisibility: (axesVisibility: boolean) => void;
  setAssetList: (assetList: any) => void;
  setInsights: (insights: {
    "vertex-count": number;
    "triangle-count": number;
    "mesh-count": number;
    "texture-count": number;
  }) => void;
  setEnableSelectedObjectInsights: (
    enableSelectedObjectInsights: boolean
  ) => void;
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
  enableSelectedObjectInsights: false,
  insights: {
    "vertex-count": 0,
    "triangle-count": 0,
    "mesh-count": 0,
    "texture-count": 0,
  },
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
  setInsights: (insights) => set({ insights }),
  setEnableSelectedObjectInsights: (enableSelectedObjectInsights) =>
    set({ enableSelectedObjectInsights }),
}));
