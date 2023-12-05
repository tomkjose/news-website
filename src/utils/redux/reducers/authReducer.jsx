import { SIGN_UP, SIGN_IN, SIGN_OUT } from "../actions/authActions";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
