import { useGlobalStore } from "@/renderer/store/store";
import { useFrame, useThree } from "@react-three/fiber";
import { selectionContext } from "@react-three/postprocessing";
import React, { useEffect } from "react";

const Insights: React.FC<{}> = () => {
  const { scene, gl } = useThree();
  const {
    assetList,
    selectedObject,
    enableSelectedObjectInsights,
    setInsights,
  } = useGlobalStore();

  const countTextures = (material: any) => {
    let count = 0;
    if (material.map) {
      count++;
    } else if (material.alphaMap) {
      count++;
    } else if (material.aoMap) {
      count++;
    } else if (material.bumpMap) {
      count++;
    } else if (material.displacementMap) {
      count++;
    } else if (material.emissiveMap) {
      count++;
    } else if (material.envMap) {
      count++;
    } else if (material.lightMap) {
      count++;
    } else if (material.metalnessMap) {
      count++;
    } else if (material.normalMap) {
      count++;
    } else if (material.roughnessMap) {
      count++;
    }
    return count;
  };

  useEffect(() => {
    setTimeout(() => {
      let vCount = 0;
      let tCount = 0;
      let count = 0;
      if (enableSelectedObjectInsights && selectedObject) {
        selectedObject.traverse((child: any) => {
          if (child.isMesh) {
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
      } else {
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
      }

      setInsights({
        "vertex-count": vCount,
        "triangle-count": tCount,
        "mesh-count": count,
        "texture-count": gl.info.memory.textures,
      });
      // console.log(vCount, tCount, count, gl.info.memory.textures, gl.info);
    }, 500);
  }, [
    scene.children.length,
    assetList,
    enableSelectedObjectInsights,
    selectedObject,
  ]);

  //   useFrame(() => {
  //     console.log(gl.info.render.triangles);
  //   });
  return null;
};

export default Insights;
