import React from "react";
import * as THREE from "three";
const Lights: React.FC<{}> = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[100, 50, 0]} intensity={0.5} />
      <directionalLight position={[0, 50, 50]} intensity={0.4} />
    </>
  );
};

export default Lights;
