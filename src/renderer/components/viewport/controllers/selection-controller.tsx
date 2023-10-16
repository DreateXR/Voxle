import { checkRaycastMesh } from "@/renderer/lib/raycast";
import { useGlobalStore } from "@/renderer/store/store";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const SelectionController: React.FC<{}> = () => {
  const { scene, camera, raycaster, pointer } = useThree();
  const { setSelectedObject, selectionMode, assetList } = useGlobalStore();
  const [raycastObjectsList, setRaycastObjectsList] = useState([]);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseMove, setIsMouseMove] = useState(false);

  const raycastObjectSelection = () => {
    if (isMouseMove) {
      return;
    }

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(raycastObjectsList);
    console.log("final raycast", intersects);

    if (intersects.length > 0) {
      const intersectedObject = intersects[0].object;
      let parentGroup: any = intersectedObject.parent;

      if (selectionMode == "object") {
        while (parentGroup && !parentGroup.isScene) {
          if (parentGroup.isGroup || parentGroup.isMesh) {
            console.log("Intersected Group:", parentGroup);
            if (parentGroup.parent.isScene) {
              setSelectedObject(parentGroup);
            } else {
              setSelectedObject(parentGroup.parent);
            }
            break;
          }
          parentGroup = parentGroup.parent;
        }
      } else if (selectionMode == "group") {
        while (parentGroup && !parentGroup.isScene) {
          if (parentGroup.isGroup || parentGroup.isMesh) {
            // console.log("Intersected Group:", parentGroup);
            setSelectedObject(parentGroup);
            break;
          }
          parentGroup = parentGroup.parent;
        }
      } else if (selectionMode == "mesh") {
        setSelectedObject(intersectedObject);
      }
    } else {
      setSelectedObject(null);
    }
  };

  const handleMouseDown = () => {
    // console.log("mouse down");
    setIsMouseDown(true);
  };

  const handleMouseMove = () => {
    // console.log("mouse move");
    if (isMouseDown) {
      setIsMouseMove(true);
    }
  };

  const handleMouseUp = () => {
    // console.log("mouse up");
    raycastObjectSelection();
    setIsMouseMove(false);
    setIsMouseDown(false);
  };

  useEffect(() => {
    setSelectedObject(null);
  }, [selectionMode]);

  useEffect(() => {
    let meshes: any = [];
    // scene.traverse((child: any) => {
    //   if (child.isMesh || child.isGroup) {
    //     if (checkRaycastMesh(child)) {
    //       meshes.push(child);
    //     }
    //   }
    // });
    for (const asset of assetList) {
      asset.traverse((child: any) => {
        if (child.isMesh) {
          // if (checkRaycastMesh(child)) {
          meshes.push(child);
          // }
        }
      });
    }
    console.log(meshes);
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
  }, [camera, isMouseDown, isMouseMove]);
  return null;
};

export default SelectionController;
