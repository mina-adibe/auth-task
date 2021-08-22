import { axiosInstance } from "./index";

export const Register = async (data) => {
  return await axiosInstance.post("api/v1/users", data, {
    handlerEnabled: true,
  });
};
