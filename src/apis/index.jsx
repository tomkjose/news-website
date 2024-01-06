import axios from "axios";
import { API_URL, SIGN_IN_API, SIGN_UP_API } from "../utils/constants";

export const fetchData = async () => {
  const response = await axios.get(API_URL);
  return response.data.articles;
};

export const signUpUser = async (userData) => {
  const response = await axios.post(SIGN_UP_API, userData);
  return response;
};

export const signInUser = async (userData) => {
  console.log("userData", userData);
  const response = await axios.post(SIGN_IN_API, userData);
  return response;
};
