import React, { useRef } from "react";

import { OrbitControls } from "@react-three/drei";

const OrbitControlsWrapper: React.FC<{}> = () => {
  const ref = useRef();
  return <OrbitControls ref={ref} />;
};

export default OrbitControlsWrapper;
