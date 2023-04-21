const apiProcessor = async (options) => {
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const adminLogin = (data) => {
  const options = {
    method: "post",
    url: "admin/login",
    data,
  };
  apiProcessor(options);
};
