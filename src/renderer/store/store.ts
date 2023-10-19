import { create } from "zustand";

type TransformControls = {
  mode: "translate" | "scale" | "rotate";
  space: "world" | "local";
};

type Insights = {
  "vertex-count": number;
  "triangle-count": number;
  "mesh-count": number;
  "texture-count": number;
};

type GlobalStore = {
  assetLoadingInProgress: boolean;
  pendingFileList: any;
  selectedObject: any;
  hoverObject: any;
  selectionHighlight: boolean;
  hoverHighlight: boolean;
  selectionMode: "object" | "group" | "mesh";
  transformControls: TransformControls;
  gridVisibility: boolean;
  axisVisibility: boolean;
  assetList: any;
  enableSelectedObjectInsights: boolean;
  insights: Insights;

  // Setter methods will be created dynamically
};

const createSetter = (key: keyof GlobalStore) => (value: any) => ({
  [key]: value,
});

export const useGlobalStore = create<GlobalStore>((set) => {
  const setters = Object.keys({
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
  }).reduce((acc: any, key) => {
    acc[`set${key.charAt(0).toUpperCase() + key.slice(1)}`] = (value: any) =>
      set(createSetter(key as keyof GlobalStore)(value));
    return acc;
  }, {} as GlobalStore);

  return {
    ...setters,
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
  };
});
