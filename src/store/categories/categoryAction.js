import { CATEGORY_ACTION_TYPES } from './categoryTypes'

export const setCategories = (categories) => {
  return { type: CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP, payload: categories }
}
