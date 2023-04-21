import { loginUser } from "../Helpers/axiosHelper";
import setAdminUser from "./Slice";
export const userAction = (data) => async (dispatch) => {
  const promiseResult = loginUser(data);
  toast.promise(promiseResult, { pending: "Please wait" });
  const { status, message, user } = await promiseResult;
  toast[status](message, user);
  status === "success" && setAdminUser(user);
};
