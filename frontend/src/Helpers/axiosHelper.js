const apiProcessor = async (option) => {
  try {
    const response = await axios(option);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const loginUser = (data) => {
  const option = {
    method: "post",
    url: "admin-user/login",
    data,
  };
  return apiProcessor(option);
};
