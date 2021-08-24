import { call, put, takeLatest } from "redux-saga/effects";
import * as Register from "../../network/register";
import * as Login from "../../network/login";
import * as ForgetPass from "../../network/forgetPassword";
import * as OtpForm from "../../network/otpForm";
import * as resetPassword from "../../network/resetPassword";

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
//forget password
export function* ForgetPasswordReq(action) {
  try {
    const response = yield call(ForgetPass.forgetPassword, action.payload);
    history.push("./OtpForm");
    yield put(Actions.ForgetPassReceive(response));
  } catch (error) {
    yield put(Actions.ForgetPassReceive(error.response.data.errors));
  }
}
//otp
export function* OtpReq(action) {
  try {
    const response = yield call(OtpForm.Otp, action.payload);
    history.push("./resetPassword");
    yield put(Actions.OtpReceive(response));
  } catch (error) {
    yield put(Actions.OtpReceive(error.response.data.errors));
  }
}
//reset password
export function* ResetPassword(action) {
  try {
    const response = yield call(resetPassword.resetPassword, action.payload);
    history.push("./login");
    yield put(Actions.ResetPassReceive(response));
  } catch (error) {
    yield put(Actions.ResetPassReceive(error.response.data.errors));
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
  yield takeLatest(types.POST_AUTH_FORGETPASS_REQUEST, ForgetPasswordReq);
  yield takeLatest(types.POST_AUTH_OTP_REQUEST, OtpReq);
  yield takeLatest(types.POST_AUTH_RESETPASS_REQUEST, ResetPassword);
}
