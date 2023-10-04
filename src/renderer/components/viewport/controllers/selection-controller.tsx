import { useGlobalStore } from "@/renderer/store/store";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const SelectionController: React.FC<{}> = () => {
  const { scene, camera, raycaster, pointer } = useThree();
  const { setSelectedObject } = useGlobalStore();
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseMove, setIsMouseMove] = useState(false);

  const filterIntersects = (intersects: any) => {
    return intersects.filter(
      (item: any) => !item.object.isTransformControlsPlane
    );
  };

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
    intersects = filterIntersects(intersects);
    if (intersects.length > 0) {
      const intersectedObject = intersects[0].object;
      let parentGroup = intersectedObject.parent;

      // Traverse up the hierarchy until we find the topmost group or reach the scene
      while (parentGroup && parentGroup.type !== "Scene") {
        if (parentGroup.type === "Group" || parentGroup.type === "Mesh") {
          console.log("Intersected Group:", parentGroup);
          setSelectedObject(parentGroup);
          break;
        }
        parentGroup = parentGroup.parent;
      }
    } else {
      setSelectedObject(null);
    }
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseMove = () => {
    if (isMouseDown) {
      setIsMouseMove(true);
    }
  };

  const handleMouseUp = () => {
    raycastObjectSelection();
    setIsMouseMove(false);
    setIsMouseDown(false);
  };

  useEffect(() => {
    const canvas = document.querySelector("canvas");

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [camera, isMouseDown, isMouseMove]);
  return null;
};

export default SelectionController;
