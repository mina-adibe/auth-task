import { call, put, takeLatest } from "redux-saga/effects";
import * as Register from "../../network/register";
import * as Login from "../../network/login";
import * as types from "../actionTypes/auth";
import * as Actions from "../actions/auth";
import history from "../../utils/history";

//register
export function* RegisterUsersReq(action) {
  try {
    const response = yield call(Register.Register, action.payload);
    history.push("./login");
    yield put(Actions.RegisterReceive(response));
  } catch (error) {
    yield put(Actions.RegisterReceive(error.response.data.errors));
  }
}
//login
export function* LoginUsersReq(payload) {
  try {
    console.log(payload);

    const response = yield call(Login.login, payload.payload);
    localStorage.setItem("token", response.data.data.user);
    history.push("/");
    yield put(Actions.LoginReceive(response.data.data.user));
  } catch (error) {
    yield put(Actions.LoginReceive(error.response.statusText));
  }
}

export function* getUsersSaga() {
  yield takeLatest(types.POST_AUTH_REGISTER_REQUEST, RegisterUsersReq);
  yield takeLatest(types.POST_AUTH_LOGIN_REQUEST, LoginUsersReq);
}
