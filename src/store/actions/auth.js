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

export const RegisterReceive = (payload) => ({
  type: types.POST_AUTH_REGISTER_RECEIVE,
  payload,
});

//forget password
export const ForgetPassRequest = (payload) => ({
  type: types.POST_AUTH_FORGETPASS_REQUEST,
  payload,
});

export const ForgetPassReceive = (payload) => ({
  type: types.POST_AUTH_FORGETPASS_RECEIVE,
  payload,
});

//otp password
export const OtpRequest = (payload) => ({
  type: types.POST_AUTH_OTP_REQUEST,
  payload,
});

export const OtpReceive = (payload) => ({
  type: types.POST_AUTH_OTP_RECEIVE,
  payload,
});
