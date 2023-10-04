import { useEffect, useRef } from "react";
import { useGlobalStore } from "@/renderer/store/store";
import { TransformControls } from "@react-three/drei";

import * as THREE from "three";

const TransformController = () => {
  const ref: any = useRef();
  const { selectedObject, transformControls } = useGlobalStore();

  useEffect(() => {
    // console.log(ref.current);
    ref.current.detach();
    ref.current.traverse((child: any) => {
      if (child instanceof THREE.Line) {
        if (child.name == "X") {
          child.material = new THREE.LineBasicMaterial({
            color: 0xff4136,
            depthTest: false,
          }); // Red for X
        } else if (child.name == "Y") {
          child.material = new THREE.LineBasicMaterial({
            color: 0x2ecc40,
            depthTest: false,
          }); // Green for Y
        } else if (child.name == "Z") {
          child.material = new THREE.LineBasicMaterial({
            color: 0x0074d9,
            depthTest: false,
          }); // Blue for Z
        }
      }
      if (child instanceof THREE.Mesh) {
        if (child.name == "X") {
          child.material = new THREE.MeshBasicMaterial({
            color: 0xff4136,
            depthTest: false,
          }); // Red for X
        } else if (child.name == "Y") {
          child.material = new THREE.MeshBasicMaterial({
            color: 0x2ecc40,
            depthTest: false,
          }); // Green for Y
        } else if (child.name == "Z") {
          child.material = new THREE.MeshBasicMaterial({
            color: 0x0074d9,
            depthTest: false,
          }); // Blue for Z
        }
      }
    });
  }, [ref.current]);

  useEffect(() => {
    // console.log(ref.current, selectedObject);
    if (selectedObject == null) {
      ref.current.detach();
    } else {
      ref.current.attach(selectedObject);
    }
  }, [selectedObject]);

  return (
    <TransformControls
      ref={ref}
      raycast={() => {}}
      mode={transformControls.mode}
      onMouseDown={() => {}}
      onMouseUp={() => {}}
      onChange={() => {}}
      onClick={() => {}}
    />
  );
};

export default TransformController;
