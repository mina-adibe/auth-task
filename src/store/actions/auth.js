import * as types from "../actionTypes/auth";

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

export const RegisterRequest = (payload) => ({
  type: types.POST_AUTH_REGISTER_REQUEST,
  payload,
});

export const RegisterReceive = (payload) => ({
  type: types.POST_AUTH_REGISTER_RECEIVE,
  payload,
});
