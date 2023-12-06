import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const addToFavoritesToDB = async (userId, news) => {
  //   console.log("object");
  try {
    const favoritesCollection = collection(db, `users/${userId}/favorites`);
    await addDoc(favoritesCollection, news);
  } catch (error) {
    console.error("Error adding to favorites:", error);
  }
};
