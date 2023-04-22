import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAction } from "../redux/Action";
const LoginPage = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.admin);
  useEffect(() => {
    user._id && navigate("/dashboard");
  }, [user]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(userAction(form));
  };
  return <div>LoginPage</div>;
};

export default LoginPage;
