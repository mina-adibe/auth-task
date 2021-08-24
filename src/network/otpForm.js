import { axiosInstance } from "./index";

export const Otp = async (data) => {
  return await axiosInstance.post(
    "api/v1/users/password/validate-token",
    data,
    {
      handlerEnabled: true,
    }
  );
};
