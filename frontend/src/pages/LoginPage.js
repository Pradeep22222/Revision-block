import React from "react";
import { userAction } from "../redux/Action";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const form = {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user, navigate]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(userAction(form));
  };
  return <div>LoginPage</div>;
};

export default LoginPage;
