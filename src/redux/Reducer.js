import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';

const dishReducer = (dishState = { isLoading: false, dishes: [], errMess: null }, action) => {
  switch (action.type) {
    case actionTypes.DISHES_LOADING:
      return {
        ...dishState,
        isLoading: true,
        dishes: []
      }
    case actionTypes.LOAD_DISHES:
      return {
        ...dishState,
        isLoading: false,
        dishes: action.payload
      }
    case actionTypes.DISHES_FAILED:
      return {
        ...dishState,
        isLoading: false,
        errMess: action.payload,
        dishes: []
      }
    default:
      return dishState
  }
}

const commentReducer = (commentState = { isLoading: true, comments: [] }, action) => {
  switch (action.type) {
    case actionTypes.LOAD_COMMENTS:
      return {
        ...commentState,
        isLoading: false,
        comments: action.payload
      };
    case actionTypes.COMMENTS_LOADING:
      return {
        ...commentState,
        isLoading: true,
        comments: []
      }
    case actionTypes.ADD_COMMENT:
      let comment = action.payload;
      return {
        ...commentState,
        comments: commentState.comments.concat(comment)
      }
    default:
      return commentState;
  }
}

export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer
})