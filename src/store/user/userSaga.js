import { takeLatest, put, all, call } from 'redux-saga/effects'

import { USER_ACTION_TYPES } from './userTypes'

import { signInSuccess, signInFailed } from './userAction'

import {
  createUserDocumentFromAuth,
  getCurrentUser
} from '../../services/firebase/auth'

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    )
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(signInFailed(error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser)
    if (!userAuth) return
    yield call(getSnapshotFromUserAuth, userAuth)
  } catch (error) {
    yield put(signInFailed(error))
  }
}

export function* onCheckUserSesson() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSaga() {
  yield all([onCheckUserSesson])
}
