import * as types from "../actionTypes/auth";

//login
export const LoginRequest = (payload) => {
  console.log(payload);
  return {
    type: types.POST_AUTH_LOGIN_REQUEST,
    payload,
  };
};

export const LoginReceive = (payload) => ({
  type: types.POST_AUTH_LOGIN_RECEIVE,
  payload,
});

//register
export const RegisterRequest = (payload) => ({
  type: types.POST_AUTH_REGISTER_REQUEST,
  payload,
});

//forget password
export const ForgetPassRequest = (payload) => ({
  type: types.POST_AUTH_FORGETPASS_REQUEST,
  payload,
});

//otp password
export const OtpRequest = (payload) => ({
  type: types.POST_AUTH_OTP_REQUEST,
  payload,
});

//reset password
export const ResetPassRequest = (payload) => ({
  type: types.POST_AUTH_RESETPASS_REQUEST,
  payload,
});
