import * as THREE from "three";

const setIgnoreRaycastFlag = (ref: any) => {
  ref.current.traverse((child: any) => {
    child.userData.raycast = { tag: "voxle_ignore_raycast" };
  });
};

const setUserFlag = (ref: any) => {
  ref.current.traverse((child: any) => {
    child.userData.raycast = { tag: "voxle_ignore_raycast" };
  });
};

const checkRaycastMesh = (mesh: any) => {
  return (
    !mesh.isTransformControlsPlane &&
    !(
      mesh.userData.raycast &&
      mesh.userData.raycast.tag == "voxle_ignore_raycast"
    )
  );
};

const checkHoverSelected = (mesh1: any, mesh2: any) => {
  if (mesh1 && mesh2) {
    if (mesh1.uuid == mesh2.uuid) {
      return true;
    }
  }
  return false;
};

const filterRaycastMeshes = (meshes: any) => {
  return meshes.filter(
    (item: any) =>
      !item.isTransformControlsPlane &&
      !(
        item.userData.raycast &&
        item.userData.raycast.tag == "voxle_ignore_raycast"
      )
  );
};

const enableOutline = (newObject: any) => {
  if (newObject) {
    newObject.traverse(function (child: any) {
      if (child instanceof THREE.Mesh) {
        child.layers.enable(10);
      }
    });
  }
};

const disableOutline = (newObject: any) => {
  if (newObject) {
    newObject.traverse(function (child: any) {
      if (child instanceof THREE.Mesh) {
        child.layers.disable(10);
      }
    });
  }
};

export {
  setIgnoreRaycastFlag,
  filterRaycastMeshes,
  checkRaycastMesh,
  enableOutline,
  disableOutline,
  checkHoverSelected,
};
