import { EffectComposer } from "@react-three/postprocessing";
import OutlineWrapper from "./outline";

const PostProcessing = () => {
  return (
    <EffectComposer multisampling={8} autoClear={false}>
      <OutlineWrapper />
    </EffectComposer>
  );
};

export default PostProcessing;
