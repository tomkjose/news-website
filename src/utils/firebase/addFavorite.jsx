import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const addToFavorites = async (userId, post) => {
  try {
    const favoritesCollection = collection(db, `users/${userId}/favorites`);
    await addDoc(favoritesCollection, post);
  } catch (error) {
    console.error("Error adding to favorites:", error);
  }
};
