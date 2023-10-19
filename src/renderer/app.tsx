import React, { useEffect } from "react";
import { Stats } from "@react-three/drei";

import Viewport from "@views/viewport";
import LoadingAnimation from "./components/loading-animation";
import Inspector from "./views/inspector";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import VOXLE_TOOLTIP from "@config/tooltip";
import { APP_COLOR_SCHEME } from "@config/color-scheme";

const App: React.FC<{}> = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-app-border-color text-app-white p-1 rounded">
      <LoadingAnimation />
      <div className="w-full h-full flex gap-1">
        <Viewport className=" relative  shrink grow basis-0 h-full min-w-0" />
        <Inspector className="lg:w-[350px] xl:w-[400px] h-full hidden lg:flex flex-col pt-2" />
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Tooltip
        id={VOXLE_TOOLTIP.id}
        style={{
          backgroundColor: APP_COLOR_SCHEME["app-white-full"],
          color: APP_COLOR_SCHEME["app-primary-color"],
          zIndex: 100,
        }}
        place="bottom"
        closeOnEsc
      />
    </div>
  );
};

export default App;
