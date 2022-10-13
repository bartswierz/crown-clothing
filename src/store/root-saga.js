import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";

// function* is an ES6 GENERATOR FUNCTION
export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
