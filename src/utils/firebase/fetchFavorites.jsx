import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const fetchUserFavoritesFromDB = async (userId) => {
  try {
    const favoritesCollection = collection(db, `users/${userId}/favorites`);
    const querySnapshot = await getDocs(favoritesCollection);

    const favorites = [];
    querySnapshot.forEach((doc) => {
      favorites.push({ id: doc.id, ...doc.data() });
    });

    return favorites;
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return [];
  }
};
