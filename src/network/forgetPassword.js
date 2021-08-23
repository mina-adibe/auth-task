import { axiosInstance } from "./index";

export const forgetPassword = async (data) => {
  return await axiosInstance.post("api/v1/users/password/forget", data, {
    handlerEnabled: true,
  });
};
