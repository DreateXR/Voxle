import React, { useEffect } from "react";
import { Stats } from "@react-three/drei";

import Viewport from "@views/viewport";
import LoadingAnimation from "./components/loading-animation";
import Inspector from "./views/inspector";
import { Toaster } from "react-hot-toast";

const App: React.FC<{}> = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-app-border-color text-app-white p-1 rounded overflow-hidden">
      <LoadingAnimation />
      <div className="w-full h-full flex gap-1">
        <Viewport className=" relative grow h-full" />
        <Inspector className="w-[350px] h-full flex flex-col pt-2" />
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default App;
