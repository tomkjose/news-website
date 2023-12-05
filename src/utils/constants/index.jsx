const API_KEY = process.env.REACT_APP_API_KEY;
const FIREBASE_KEY = process.env.REACT_APP_FIREBASE_KEY;
export const API_URL = `https://newsapi.org/v2/everything?q=apple&from=2023-12-04&to=2023-12-04&sortBy=popularity&apiKey=${API_KEY}`;
export const SIGN_IN_API = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_KEY}`;
export const SIGN_UP_API = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_KEY}`;
