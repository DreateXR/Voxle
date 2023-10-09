const setIgnoreRaycastFlag = (ref: any) => {
  ref.current.traverse((child: any) => {
    child.userData = { tag: "voxle_ignore_raycast" };
  });
};

const filterRaycastArray = (intersects: any) => {
  let filterIntersects;
  filterIntersects = intersects.filter(
    (item: any) => !item.object.isTransformControlsPlane
  );

  filterIntersects = filterIntersects.filter(
    (item: any) => !(item.object.userData.tag == "voxle_ignore_raycast")
  );
  return filterIntersects;
};

export { setIgnoreRaycastFlag, filterRaycastArray };
