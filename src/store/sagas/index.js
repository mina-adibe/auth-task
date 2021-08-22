import { all } from "redux-saga/effects";

import { getUsersSaga } from "./auth";

export function* watchSagas() {
  yield all([getUsersSaga()]);
}
