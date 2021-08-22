import * as types from "../actionTypes/loader";

export const loader = (payload) => {
  return payload
    ? {
        type: types.SHOW_LOADER,
        payload,
      }
    : {
        type: types.HIDE_LOADER,
        payload,
      };
};
