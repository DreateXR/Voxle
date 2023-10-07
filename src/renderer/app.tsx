import React, { useEffect } from "react";
import { Stats } from "@react-three/drei";

import Viewport from "@views/viewport";
import LoadingAnimation from "./components/loading-animation";

const App: React.FC<{}> = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-app-border-color text-app-white p-1 rounded overflow-hidden">
      <LoadingAnimation />
      <div className="w-full h-full flex">
        <Viewport className=" relative grow h-full" />
        <div className="w-[350px]  h-full"></div>
      </div>
    </div>
  );
};

export default App;
