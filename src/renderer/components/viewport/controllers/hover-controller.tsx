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
  const { hoverHighlight, setHoverObject, selectionMode, assetList } =
    useGlobalStore();
  const [raycastObjectsList, setRaycastObjectsList] = useState([]);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const raycastObjectHover = () => {
    raycaster.setFromCamera(pointer, camera);
    let intersects = raycaster.intersectObjects(raycastObjectsList);

    if (intersects.length > 0) {
      const intersectedObject = intersects[0].object;
      let parentGroup: any = intersectedObject.parent;

      if (selectionMode == "object") {
        while (parentGroup && !parentGroup.isScene) {
          if (parentGroup.isGroup || parentGroup.isMesh) {
            // console.log("Intersected Group:", parentGroup);
            if (parentGroup.parent.isScene) {
              setHoverObject(parentGroup);
            } else {
              setHoverObject(parentGroup.parent);
            }
            break;
          }
          parentGroup = parentGroup.parent;
        }
      } else if (selectionMode == "group") {
        while (parentGroup && !parentGroup.isScene) {
          if (parentGroup.isGroup || parentGroup.isMesh) {
            // console.log("Intersected Group:", parentGroup);
            setHoverObject(parentGroup);
            break;
          }
          parentGroup = parentGroup.parent;
        }
      } else if (selectionMode == "mesh") {
        setHoverObject(intersectedObject);
      }
    } else {
      setHoverObject(null);
    }
  };

  useEffect(() => {
    setHoverObject(null);
  }, [selectionMode]);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseMove = () => {
    if (!isMouseDown && hoverHighlight) {
      raycastObjectHover();
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  useEffect(() => {
    let meshes: any = [];
    for (const asset of assetList) {
      asset.traverse((child: any) => {
        if (child.isMesh) {
          // if (checkRaycastMesh(child)) {
          meshes.push(child);
          // }
        }
      });
    }
    // console.log(meshes);
    setRaycastObjectsList([...meshes]);
  }, [scene.children.length, assetList]);

  useEffect(() => {
    const viewport = document.getElementById("viewport");
    viewport.addEventListener("mousedown", handleMouseDown);
    viewport.addEventListener("mousemove", handleMouseMove);
    viewport.addEventListener("mouseup", handleMouseUp);

    return () => {
      viewport.removeEventListener("mousedown", handleMouseDown);
      viewport.removeEventListener("mousemove", handleMouseMove);
      viewport.removeEventListener("mouseup", handleMouseUp);
    };
  }, [camera, isMouseDown]);

  return null;
};

export default HoverController;
