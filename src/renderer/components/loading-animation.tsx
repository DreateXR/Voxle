import { useGlobalStore } from "@store/store";
import "@styles/loading-animation.css";

const LoadingAnimation = () => {
  const { assetLoadingInProgress } = useGlobalStore();
  if (!assetLoadingInProgress) return null;
  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-50 backdrop-blur-sm flex justify-center items-center">
      <div className="cube">
        <div className="sides">
          <div className="top"></div>
          <div className="right"></div>
          <div className="bottom"></div>
          <div className="left"></div>
          <div className="front"></div>
          <div className="back"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
