import { GizmoHelper, GizmoViewcube, GizmoViewport } from "@react-three/drei";

const Gizmo = () => {
  return (
    <GizmoHelper
      alignment="bottom-right"
      margin={[80, 80]}
      raycast={() => {}}
      renderPriority={2}
    >
      <GizmoViewport
        labelColor="#fefefe"
        axisHeadScale={1}
        axisColors={["#FF4136", "#2ECC40", "#0074D9"]}
      />
      {/* <GizmoViewcube
        opacity={0.6}
        color="#202020"
        textColor="#fefefe"
        strokeColor="#fefefe"
      /> */}
    </GizmoHelper>
  );
};

export default Gizmo;
