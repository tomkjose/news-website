import { db } from "./firebaseConfig";
import { collection, doc, deleteDoc } from "firebase/firestore";

export const removeFromFavorites = async (userId, postId) => {
  try {
    const favoritesCollection = collection(db, `users/${userId}/favorites`);
    const postDoc = doc(favoritesCollection, postId);

    await deleteDoc(postDoc);
  } catch (error) {
    console.error("Error removing from favorites:", error);
  }
};
