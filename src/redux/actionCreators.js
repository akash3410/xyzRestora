import * as actionTypes from './actionTypes';
import axios from 'axios';
import { baseURL } from './baseURL';

export const addComment = (dishId, rating, author, comment, nextId) => dispatch => {
  const newComment = {
    id: nextId,
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
  newComment.date = new Date().toISOString();

  axios.post(baseURL + 'comments', newComment)
    .then(response => response.data)
    .then(comment => dispatch(commentConcat(comment)));
}

export const commentConcat = comment => ({
  type: actionTypes.ADD_COMMENT,
  payload: comment
})

export const commentsLoading = () => ({
  type: actionTypes.COMMENTS_LOADING
})

export const loadComments = comments => ({
  type: actionTypes.LOAD_COMMENTS,
  payload: comments
})

export const fetchComments = () => dispatch => {
  dispatch(commentsLoading());

  axios.get(baseURL + "comments")
    .then(response => response.data)
    .then(comments => dispatch(loadComments(comments)))
}

const loadDishes = dishes => ({
  type: actionTypes.LOAD_DISHES,
  payload: dishes
})

const dishesLoading = () => ({
  type: actionTypes.DISHES_LOADING
})

const dishesFailed = errMess => ({
  type: actionTypes.DISHES_FAILED,
  payload: errMess
})

export const fetchDishes = () => {
  return dispatch => {
    dispatch(dishesLoading());

    axios.get(baseURL + "dishes")
      .then(response => response.data)
      .then(dishes => {
        dispatch(loadDishes(dishes))
      })
      .catch(error => {
        dispatch(dishesFailed(error.message))
      })
  }
}
