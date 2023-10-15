import { FAILURE, SUCCESS } from "@config/constants";
import toast from "react-hot-toast";

const sendNotification = (type: number, message: string, duration: number) => {
  if (type == FAILURE) {
    toast.error(message, { duration: duration });
  } else if (type == SUCCESS) {
    toast.success(message, { duration: duration });
  }
};

export { sendNotification };
