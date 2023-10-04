import React, { useEffect, useRef, useState } from "react";

import { OrbitControls } from "@react-three/drei";
import { useGlobalStore } from "@/renderer/store/store";

const OrbitController: React.FC<{}> = () => {
  const ref = useRef();

  return <OrbitControls ref={ref} makeDefault />;
};

export default OrbitController;
