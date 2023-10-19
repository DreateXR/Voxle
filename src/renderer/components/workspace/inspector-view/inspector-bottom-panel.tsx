import { useGlobalStore } from "@/renderer/store/store";
import Properties from "./properties";

const InspectorBottomPanel = () => {
  const { selectedObject } = useGlobalStore();
  return (
    <div className="w-full max-h-1/2 h-1/2 flex rounded overflow-hidden">
      <div className="h-full w-8 bg-app-base-color"></div>
      <Properties />
    </div>
  );
};

export default InspectorBottomPanel;
