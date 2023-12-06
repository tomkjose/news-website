import { fetchUserFavoritesFromDB } from "../../firebase/fetchFavorites";

import { addToFavoritesToDB } from "../../firebase/addFavorite";
import { removeFromFavoritesFromDB } from "../../firebase/removeFavorite";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FETCH_FAVORITES_REQUEST = "FETCH_FAVORITES_REQUEST";
export const FETCH_FAVORITES_SUCCESS = "FETCH_FAVORITES_SUCCESS";
export const FETCH_FAVORITES_FAILURE = "FETCH_FAVORITES_FAILURE";

export const addFavorite = (userId, index) => async (dispatch) => {
  try {
    console.log("index", index);
    await addToFavoritesToDB(userId, index);
    dispatch({
      type: ADD_FAVORITE,
      payload: index,
    });
  } catch (error) {
    console.error("Error adding to favorites:", error);
  }
};

export const removeFavorite = (userId, postId) => async (dispatch) => {
  try {
    await removeFromFavoritesFromDB(userId, postId);
    dispatch({
      type: REMOVE_FAVORITE,
      payload: postId,
    });
  } catch (error) {
    console.error("Error removing from favorites:", error);
  }
};

export const fetchFavorites = (userId) => async (dispatch) => {
  dispatch({ type: FETCH_FAVORITES_REQUEST });
  try {
    const favorites = await fetchUserFavoritesFromDB(userId);
    dispatch({
      type: FETCH_FAVORITES_SUCCESS,
      payload: favorites,
    });
  } catch (error) {
    dispatch({
      type: FETCH_FAVORITES_FAILURE,
      payload: error.message,
    });
  }
};
