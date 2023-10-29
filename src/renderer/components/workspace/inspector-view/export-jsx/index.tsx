import { useGlobalStore } from "@/renderer/store/store";
import React, { useState } from "react";
import ExportFilePath from "./export-file-path";
import ToggleExportMenu from "./toggle-export-menu";
import DropDown from "./drop-down";
import AssetOptimisation from "./asset-optimisation";
import { writeToTemp } from "@/renderer/lib/gltf-transform-utils";

const ExportToJsx: React.FC<{ selectedTab: string; title: string }> = ({
  selectedTab,
  title,
}) => {
  //   const { scene } = useThree();
  const { assetList, tempFolder, scene } = useGlobalStore();
  const [outputPath, setOutputPath] = useState("");
  const [fileName, setFileName] = useState("model");
  const [enableTypescript, setEnableTypescript] = useState(false);
  const [keepOriginal, setKeepOriginal] = useState(false);
  const [keepGroups, setKeepGroups] = useState(false);
  const [meta, setMeta] = useState(false);
  const [enableShadows, setEnableShadows] = useState(false);
  const [enableInstances, setEnableInstances] = useState(false);
  const [enableInstanceAll, setEnableInstanceAll] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [meshTransformation, setMeshTransformation] = useState(false);
  const [resolution, setResolution] = useState(1024);
  const [keepMeshes, setKeepMeshes] = useState(false);
  const [keepMaterials, setKeepMaterials] = useState(false);
  const [format, setFormat] = useState("webp");
  const [simplify, setSimplify] = useState(false);
  const [weld, setWeld] = useState(0.00005);
  const [ratio, setRatio] = useState(0);
  const [error, setError] = useState(0.0001);
  return (
    <div
      className={`absolute w-full h-full font-mono ${
        selectedTab == title ? "flex flex-col gap-4" : "hidden"
      }  p-4  bg-top-panel-tab-enabled text-app-white gap-6 overflow-y-scroll`}
    >
      <div className="w-full border-b-[1px] border-b-app-scrollbar-color py-1">
        Export to JSX
      </div>
      <ExportFilePath
        fileName={fileName}
        setFileName={setFileName}
        outputPath={outputPath}
        setOutputPath={setOutputPath}
      />
      <div className="w-full flex flex-col gap-2">
        <ToggleExportMenu
          checked={enableTypescript}
          onChange={setEnableTypescript}
          label="Enable Typescript"
        />
        <ToggleExportMenu
          checked={keepOriginal}
          onChange={setKeepOriginal}
          label="Keep Original Names"
        />
        <ToggleExportMenu
          checked={keepGroups}
          onChange={setKeepGroups}
          label="Keep Empty Groups, disable pruning"
        />
        <ToggleExportMenu
          checked={meta}
          onChange={setMeta}
          label="Include Metadata"
        />
        <ToggleExportMenu
          checked={enableShadows}
          onChange={setEnableShadows}
          label="Enable Shadows"
        />
        <ToggleExportMenu
          checked={enableInstances}
          onChange={setEnableInstances}
          label="Instance duplicate geometry"
        />
        <ToggleExportMenu
          checked={enableInstanceAll}
          onChange={setEnableInstanceAll}
          label="Instance all geometry"
        />
        <ToggleExportMenu
          checked={meshTransformation}
          onChange={setMeshTransformation}
          label="Enable Asset Optimisation"
        />
        {meshTransformation && (
          <AssetOptimisation
            resolution={resolution}
            setResolution={setResolution}
            keepMeshes={keepMeshes}
            setKeepMeshes={setKeepMeshes}
            keepMaterials={keepMaterials}
            setKeepMaterials={setKeepMaterials}
            format={format}
            setFormat={setFormat}
            simplify={simplify}
            setSimplify={setSimplify}
            weld={weld}
            setWeld={setWeld}
            ratio={ratio}
            setRatio={setRatio}
            error={error}
            setError={setError}
          />
        )}
      </div>
      {/* <div className="w-full flex flex-col border-[1px] border-app-white-disable rounded-lg">
        <div className="w-full flex p-2 justify-start items-center gap-6">
          <div className="relative h-6 aspect-square">
            <DropDown
              isExpanded={showAdvanced}
              setIsExpanded={setShowAdvanced}
            />
          </div>
          Advanced Settings
        </div>
        {showAdvanced && (
          <div className="w-full p-2 bg-top-panel-tab-disabled rounded-b-lg">
            hui
          </div>
        )}
      </div> */}
      <div className="flex justify-center items-center ">
        <div
          className="px-8 py-1 rounded cursor-pointer bg-app-white-disable hover:bg-app-white text-app-primary-color"
          onClick={() => {
            // if (assetList.length > 0) {
            writeToTemp(assetList, tempFolder, "model.glb");
            // }

            // const x = window.electronAPI.convertToJsx({
            //   model: "Test",
            //   filename: "hihi",
            // });
          }}
        >
          Export
        </div>
      </div>
    </div>
  );
};

export default ExportToJsx;
