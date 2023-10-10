import { all, call } from 'redux-saga/effects'

import { categoriesSaga } from './categories/categorySaga'

export function* rootSaga() {
  yield all([call(categoriesSaga)])
}
