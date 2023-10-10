import { useGlobalStore } from "@/renderer/store/store";
import { EffectComposer, Outline } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";
import React, { useEffect, useState } from "react";

const PostProcessing = () => {
  const { selectedObject } = useGlobalStore();
  return (
    <EffectComposer multisampling={8} autoClear={false}>
      <Outline
        selection={selectedObject ? [selectedObject] : undefined}
        selectionLayer={10}
        visibleEdgeColor={0xffffff}
        hiddenEdgeColor={0xffffff}
        edgeStrength={0.5}
        kernelSize={KernelSize.VERY_SMALL}
        blur={true}
      />
    </EffectComposer>
  );
};

export default PostProcessing;
