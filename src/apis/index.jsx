import axios from "axios";
import { API_URL, SIGN_IN_API, SIGN_UP_API } from "../utils/constants";

export const fetchData = async () => {
  console.log("API_URL", API_URL);
  const response = await axios.get(API_URL);
  console.log("response", response);
  return response;
};

export const signUpUser = async (email, password) => {
  console.log("API_URL", SIGN_UP_API);
  const response = await axios.get(SIGN_UP_API, { email, password });
  console.log("response", response);
  return response;
};

export const signInUser = async (email, password) => {
  console.log("API_URL", SIGN_IN_API);
  const response = await axios.get(SIGN_IN_API, { email, password });
  console.log("response", response);
  return response;
};
