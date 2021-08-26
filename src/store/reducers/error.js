import * as types from "../actionTypes/error";

const INITIAL_SATE = {};

const ErrorReceived = (state = INITIAL_SATE, action) => {
  switch (action.type) {
    case types.ERROR_RECEIVED:
      return action.payload;

    default:
      return state;
  }
};

export default ErrorReceived;
