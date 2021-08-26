import * as types from "../actionTypes/error";

//register
export const ErrorReceived = (payload) => ({
  type: types.ERROR_RECEIVED,
  payload,
});
