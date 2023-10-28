import React, { useState } from "react";
import ToggleExportMenu from "./toggle-export-menu";

const Input: React.FC<{ value: any; setValue: any }> = ({
  value,
  setValue,
}) => {
  return (
    <input
      className="grow font-mono rounded border-app-white-disable border-[0.5px] bg-top-panel-tab-disabled text-sm pl-1"
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

const AssetOptimisation: React.FC<{
  resolution: any;
  setResolution: any;
  keepMeshes: any;
  setKeepMeshes: any;
  keepMaterials: any;
  setKeepMaterials: any;
  format: any;
  setFormat: any;
  simplify: any;
  setSimplify: any;
  weld: any;
  setWeld: any;
  ratio: any;
  setRatio: any;
  error: any;
  setError: any;
}> = ({
  resolution,
  setResolution,
  keepMeshes,
  setKeepMeshes,
  keepMaterials,
  setKeepMaterials,
  format,
  setFormat,
  simplify,
  setSimplify,
  weld,
  setWeld,
  ratio,
  setRatio,
  error,
  setError,
}) => {
  return (
    <div className="w-full flex flex-col bg-top-panel-tab-disabled py-4 px-2 gap-2 rounded-lg">
      <div className="flex gap-2">
        <div className="w-2/3">Texture Resolution:</div>
        <input
          className="w-1/3 font-mono rounded border-app-white-disable border-[0.5px] bg-top-panel-tab-disabled text-sm pl-1"
          type="text"
          value={resolution}
          onChange={(e) => {
            setResolution(e.target.value);
          }}
        />
      </div>
      <ToggleExportMenu
        checked={keepMeshes}
        onChange={setKeepMeshes}
        label="Merge Compatible Meshes"
      />
      <ToggleExportMenu
        checked={keepMaterials}
        onChange={setKeepMaterials}
        label="Merge Materials"
      />
      <div className="flex gap-2">
        <div className="w-2/3">Texture Format:</div>
        <select
          className="w-1/3 font-mono rounded border-app-white-disable border-[0.5px] bg-top-panel-tab-disabled text-sm pl-1"
          value={format}
          onChange={(e) => {
            setFormat(e.target.value);
          }}
        >
          <option value="webp">webp</option>
          <option value="jpg">jpg</option>
          <option value="png">png</option>
        </select>
      </div>
      <ToggleExportMenu
        checked={simplify}
        onChange={setSimplify}
        label="Mesh Simplification"
      />
      {simplify && (
        <>
          <div className="flex gap-2">
            <div className="w-2/3">Weld Tolerance:</div>
            <input
              className="w-1/3 font-mono rounded border-app-white-disable border-[0.5px] bg-top-panel-tab-disabled text-sm pl-1"
              type="text"
              value={weld}
              onChange={(e) => {
                setWeld(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-2">
            <div className="w-2/3">Simplifier Ratio:</div>
            <input
              className="w-1/3 font-mono rounded border-app-white-disable border-[0.5px] bg-top-panel-tab-disabled text-sm pl-1"
              type="text"
              value={ratio}
              onChange={(e) => {
                setRatio(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-2">
            <div className="w-2/3">Simplifier Error:</div>
            <input
              className="w-1/3 font-mono rounded border-app-white-disable border-[0.5px] bg-top-panel-tab-disabled text-sm pl-1"
              type="text"
              value={error}
              onChange={(e) => {
                setError(e.target.value);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AssetOptimisation;
