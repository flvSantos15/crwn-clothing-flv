import { AnyAction } from 'redux'

export type ActinWithPayload<T, P> = {
  type: T
  payload: P
}

export type Action<T> = {
  type: T
}

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload }
}
