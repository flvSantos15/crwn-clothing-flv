import { getCategoriesAndDocuments } from '../../services/firebase'
import { CATEGORY_ACTION_TYPES } from './categoryTypes'

export const fetchCategoriesStart = () => {
  return { type: CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START }
}

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    payload: categories
  }
}

export const fetchCategoriesFailed = (error) => {
  return { type: CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, payload: error }
}

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart())
  try {
    const categories = await getCategoriesAndDocuments('categories')
    dispatch(fetchCategoriesSuccess(categories))
  } catch (error) {
    dispatch(fetchCategoriesFailed(error))
  }
}
