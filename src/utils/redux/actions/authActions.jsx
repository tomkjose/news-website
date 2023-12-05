import { signInUser, signUpUser } from "../../../apis";

export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

const updateUserAndLocalStorage = (user, type) => {
  localStorage.setItem("user", JSON.stringify(user));
  return {
    type,
    payload: user,
  };
};

export const signUp = (userData) => async (dispatch) => {
  try {
    const response = await signUpUser(userData);
    const user = response.data;
    dispatch(updateUserAndLocalStorage(user, SIGN_UP));
  } catch (error) {
    console.log("Error in Sign-up", error);
  }
};

export const signIn = (userData) => async (dispatch) => {
  try {
    const response = await signInUser(userData);
    const user = response.data;
    dispatch(updateUserAndLocalStorage(user, SIGN_IN));
  } catch (error) {
    console.log("Error in Sign-in", error);
  }
};

export const signOut = () => (dispatch) => {
  console.log("test");
  localStorage.removeItem("user");
  dispatch({
    type: SIGN_OUT,
  });
};
