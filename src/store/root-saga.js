import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./categories/category.saga";

// function* is an ES6 GENERATOR FUNCTION
export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
