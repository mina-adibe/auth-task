import * as types from "../actionTypes/auth";

const INITIAL_SATE = {};

const AuthReducer = (state = INITIAL_SATE, action) => {
  switch (action.type) {
    case types.POST_AUTH_LOGIN_RECEIVE:
      return action.payload;

    default:
      return state;
  }
};

export default AuthReducer;
