import { takeLates, put, all, call } from 'redux-saga'

import { USER_ACTION_TYPES } from './userTypes'

import { signInSuccess, signInFailed } from './userAction'

import { getCurrentUser } from '../../services/firebase/auth'

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser)
    if (!userAuth) return
  } catch (error) {}
}

export function* onCheckUserSesson() {
  yield takeLates(USER_ACTION_TYPES.CHECK_USER_SESSION)
}

export function* userSaga() {
  yield all([])
}
