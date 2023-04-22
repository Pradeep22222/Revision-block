import { adminLogin } from "../Helpers/axiosHelper";
import { setAdminUser } from "./Slice";
export const userAction = (data) => async (dispatch) => {
  const resultPromise = adminLogin(data);
  toast.promise(resultPromise, { pending: "Please wait..." });
  const { status, message, user } = await resultPromise;
  toast[status](message);
  status === "success" && setAdminUser(user);
};
