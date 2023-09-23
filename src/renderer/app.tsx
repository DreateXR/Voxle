import React, { useEffect } from "react";
import { Stats } from "@react-three/drei";

import Viewport from "@views/viewport";

const App: React.FC<{}> = () => {
  return (
    <div
      id="voxle"
      className="w-screen h-screen flex justify-center items-center bg-app-border-color text-app-white p-1 rounded overflow-hidden"
    >
      <Viewport />
    </div>
  );
};

export default App;
