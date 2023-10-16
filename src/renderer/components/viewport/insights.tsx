import { useGlobalStore } from "@/renderer/store/store";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect } from "react";

const Insights: React.FC<{}> = () => {
  const { scene, gl } = useThree();
  const { assetList } = useGlobalStore();
  useEffect(() => {
    return;
    setTimeout(() => {
      let vCount = 0;
      let tCount = 0;
      let count = 0;
      for (const asset of assetList) {
        asset.traverse((child: any) => {
          if (child.isMesh) {
            // console.log(child.geometry);
            count++;
            if (child.geometry.type == "BufferGeometry") {
              if (child.geometry.getAttribute("position")) {
                vCount +=
                  child.geometry.getAttribute("position").array.length / 3;
              }
              if (child.geometry.getIndex()) {
                tCount += child.geometry.getIndex().array.length / 3;
              }
            } else if (child.geometry.type == "Geometry") {
              vCount += child.geometry.vertices.length;
              tCount += child.geometry.faces.length;
            }
          }
        });
      }
      console.log(vCount, tCount, count, gl.info.memory.textures, gl.info);
    }, 500);
  }, [scene.children.length, assetList.length]);

  //   useFrame(() => {
  //     console.log(gl.info.render.triangles);
  //   });
  return null;
};

export default Insights;
