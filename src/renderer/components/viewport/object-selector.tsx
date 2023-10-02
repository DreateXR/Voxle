import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const ObjectSelector: React.FC<{}> = () => {
  const { scene, camera, raycaster, pointer } = useThree();

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const handleClick = (event: any) => {
      //   console.log(camera);
      raycaster.setFromCamera(pointer, camera);

      // Get all meshes in the scene, or from specific groups
      const meshes: any = [];
      scene.traverse((child: any) => {
        if (child.isMesh) {
          meshes.push(child);
        }
      });

      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        let parentGroup = intersectedObject.parent;

        // Traverse up the hierarchy until we find the topmost group or reach the scene
        while (parentGroup && parentGroup.type !== "Scene") {
          if (parentGroup.type === "Group") {
            console.log("Intersected Group:", parentGroup);
            break;
          }
          parentGroup = parentGroup.parent;
        }
      }
    };
    canvas.addEventListener("click", handleClick);
    return () => {
      canvas.removeEventListener("click", handleClick);
    };
  }, [camera]);
  return null;
};

export default ObjectSelector;
