import { filterRaycastArray } from "@/renderer/lib/raycast";
import { useGlobalStore } from "@/renderer/store/store";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const SelectionController: React.FC<{}> = () => {
  const { scene, camera, raycaster, pointer } = useThree();
  const { selectedObject, setSelectedObject, selectionMode } = useGlobalStore();
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseMove, setIsMouseMove] = useState(false);

  const raycastObjectSelection = () => {
    // console.log("selection mouse down", isMouseDown, isMouseMove);
    if (isMouseMove) {
      // console.log("returned");
      return;
    }
    // console.log("entered");

    raycaster.setFromCamera(pointer, camera);
    const meshes: any = [];
    scene.traverse((child: any) => {
      if (child.isMesh) {
        meshes.push(child);
      }
    });

    let intersects = raycaster.intersectObjects(meshes);
    // console.log(intersects);
    intersects = filterRaycastArray(intersects);
    console.log("final raycast", intersects);
    if (selectedObject) {
      selectedObject.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.layers.disable(10);
        }
      });
    }
    if (intersects.length > 0) {
      const intersectedObject = intersects[0].object;
      let parentGroup = intersectedObject.parent;

      // Traverse up the hierarchy until we find the topmost group or reach the scene
      while (parentGroup && parentGroup.type !== "Scene") {
        if (parentGroup.type === "Group" || parentGroup.type === "Mesh") {
          console.log("Intersected Group:", parentGroup);
          if (selectionMode == "object") {
            setSelectedObject(parentGroup.parent);
            parentGroup.parent.traverse(function (child) {
              if (child instanceof THREE.Mesh) {
                child.layers.enable(10);
              }
            });
          } else if (selectionMode == "mesh") {
            setSelectedObject(parentGroup);
            parentGroup.traverse(function (child) {
              if (child instanceof THREE.Mesh) {
                child.layers.enable(10);
              }
            });
          }
          break;
        }
        parentGroup = parentGroup.parent;
      }
    } else {
      // console.log("clicked");
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
    if (selectedObject) {
      selectedObject.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.layers.disable(10);
        }
      });
    }
    setSelectedObject(null);
  }, [selectionMode]);

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
