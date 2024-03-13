import DISHES from '../data/dishes';
import * as actionTypes from './actionTypes';

export const addComment = (dishId, rating, author, comment) => ({
  type: actionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
})

const loadDishes = dishes => ({
  type: actionTypes.LOAD_DISHES,
  payload: dishes
})

const dishesLoading = () => ({
  type: actionTypes.DISHES_LOADING
})

export const fetchDishes = () => {
  return dispatch => {
    dispatch(dishesLoading());

    setTimeout(() => {
      dispatch(loadDishes(DISHES))
    }, 2000);
  }
}
