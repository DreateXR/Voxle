import {
  checkRaycastMesh,
  disableOutline,
  enableOutline,
  checkHoverSelected,
} from "@/renderer/lib/raycast";
import { useGlobalStore } from "@/renderer/store/store";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const HoverController: React.FC<{}> = () => {
  const { scene, camera, raycaster, pointer } = useThree();
  const { hoverHighlight, setHoverObject, selectionMode } = useGlobalStore();
  const [raycastObjectsList, setRaycastObjectsList] = useState([]);

  const raycastObjectHover = () => {
    raycaster.setFromCamera(pointer, camera);
    let intersects = raycaster.intersectObjects(raycastObjectsList);

    if (intersects.length > 0) {
      const intersectedObject = intersects[0].object;
      let parentGroup = intersectedObject.parent;

      // Traverse up the hierarchy until we find the topmost group or reach the scene
      while (parentGroup && parentGroup.type !== "Scene") {
        if (parentGroup.type === "Group" || parentGroup.type === "Mesh") {
          //   console.log("Intersected Group:", parentGroup);
          if (selectionMode == "object") {
            setHoverObject(parentGroup.parent);
          } else if (selectionMode == "mesh") {
            setHoverObject(parentGroup);
          }
          break;
        }
        parentGroup = parentGroup.parent;
      }
    } else {
      setHoverObject(null);
    }
  };

  useEffect(() => {
    setHoverObject(null);
  }, [selectionMode]);

  useFrame(() => {
    if (hoverHighlight) {
      raycastObjectHover();
    }
  });

  useEffect(() => {
    let meshes: any = [];
    scene.traverse((child: any) => {
      if (child.isMesh) {
        if (checkRaycastMesh(child)) {
          meshes.push(child);
        }
      }
    });
    console.log(meshes);
    setRaycastObjectsList([...meshes]);
  }, [scene.children.length]);

  return null;
};

export default HoverController;
