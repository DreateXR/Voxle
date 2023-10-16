import { Outline } from "@react-three/postprocessing";
import { useGlobalStore } from "@/renderer/store/store";
import { KernelSize } from "postprocessing";
import React, { useEffect, useState } from "react";
import { disableOutline, enableOutline } from "@/renderer/lib/raycast";
import { useThree } from "@react-three/fiber";

const OutlineWrapper = () => {
  const { hoverObject, selectedObject, hoverHighlight, selectionHighlight } =
    useGlobalStore();
  const [objects, setObjects] = useState(undefined);
  const { scene } = useThree();
  useEffect(() => {
    if (objects) {
      for (const object of objects) {
        disableOutline(object);
      }
    }

    let tmpObjects = [];
    if (hoverHighlight) {
      enableOutline(hoverObject);
      if (hoverObject) {
        tmpObjects.push(hoverObject);
      }
    }
    if (selectionHighlight) {
      enableOutline(selectedObject);
      if (selectedObject) {
        tmpObjects.push(selectedObject);
      }
    } else {
    }
    setObjects(tmpObjects);
  }, [hoverObject, selectedObject, hoverHighlight, selectionHighlight]);
  return (
    <Outline
      selection={objects}
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
