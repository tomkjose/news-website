import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FETCH_FAVORITES_REQUEST,
  FETCH_FAVORITES_SUCCESS,
  FETCH_FAVORITES_FAILURE,
} from "../actions/favoritesAction";

const initialState = {
  favorites: [],
  loading: false,
  error: null,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (postId) => postId !== action.payload
        ),
      };
    case FETCH_FAVORITES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_FAVORITES_SUCCESS:
      return {
        ...state,
        loading: false,
        favorites: action.payload,
      };
    case FETCH_FAVORITES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
