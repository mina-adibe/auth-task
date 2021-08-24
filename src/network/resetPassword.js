import { axiosInstance } from "./index";

export const resetPassword = async (data) => {
  return await axiosInstance.post("api/v1/users/password/reset", data, {
    handlerEnabled: true,
  });
};
