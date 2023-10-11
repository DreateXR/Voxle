import { Outline } from "@react-three/postprocessing";
import { useGlobalStore } from "@/renderer/store/store";
import { KernelSize } from "postprocessing";
import React, { useEffect, useState } from "react";
import { disableOutline, enableOutline } from "@/renderer/lib/raycast";

const OutlineWrapper = () => {
  const { hoverObject, selectedObject } = useGlobalStore();

  return (
    <Outline
      selection={undefined}
      selectionLayer={10}
      visibleEdgeColor={0xffffff}
      hiddenEdgeColor={0xffffff}
      edgeStrength={1}
      // kernelSize={KernelSize.VERY_SMALL}
      // blur={true}
    />
  );
};

export default OutlineWrapper;
