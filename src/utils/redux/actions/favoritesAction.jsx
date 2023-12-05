import { fetchUserFavoritesFromDB } from "../../firebase/fetchFavorites";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FETCH_FAVORITES_REQUEST = "FETCH_FAVORITES_REQUEST";
export const FETCH_FAVORITES_SUCCESS = "FETCH_FAVORITES_SUCCESS";
export const FETCH_FAVORITES_FAILURE = "FETCH_FAVORITES_FAILURE";

export const addFavorite = (postId) => ({
  type: ADD_FAVORITE,
  payload: postId,
});

export const removeFavorite = (postId) => ({
  type: REMOVE_FAVORITE,
  payload: postId,
});

export const fetchFavoritesRequest = () => ({
  type: FETCH_FAVORITES_REQUEST,
});

export const fetchFavoritesSuccess = (favorites) => ({
  type: FETCH_FAVORITES_SUCCESS,
  payload: favorites,
});

export const fetchFavoritesFailure = (error) => ({
  type: FETCH_FAVORITES_FAILURE,
  payload: error,
});

export const fetchFavorites = (userId) => {
  return async (dispatch) => {
    dispatch(fetchFavoritesRequest());
    try {
      const favorites = await fetchUserFavoritesFromDB(userId);
      dispatch(fetchFavoritesSuccess(favorites));
    } catch (error) {
      dispatch(fetchFavoritesFailure(error.message));
    }
  };
};
