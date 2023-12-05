import { combineReducers } from "redux";
import authReducer from "./authReducer";
import newsReducer from "./newsReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
