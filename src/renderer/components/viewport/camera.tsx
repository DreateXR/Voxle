import React from "react";
import { PerspectiveCamera } from "@react-three/drei";

const Camera: React.FC<{}> = () => {
  return <PerspectiveCamera makeDefault position={[200, 100, 0]} far={6400} />;
};

export default Camera;
