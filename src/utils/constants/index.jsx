const FIREBASE_KEY = process.env.REACT_APP_FIREBASE_KEY;
export const API_URL = `https://new-backend-hbz4.onrender.com/news`;
export const SIGN_IN_API = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_KEY}`;
export const SIGN_UP_API = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_KEY}`;
