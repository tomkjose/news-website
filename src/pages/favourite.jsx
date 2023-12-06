import React, { useEffect } from "react";
import {
  fetchFavorites,
  removeFavorite,
} from "../utils/redux/actions/favoritesAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Favourite() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const handleRemoveFavorite = (userId, postId) => {
    console.log("userId", userId);
    console.log("postId", postId);
    dispatch(removeFavorite(userId, postId));
  };
  useEffect(() => {
    if (user) {
      dispatch(fetchFavorites(user.localId));
    } else {
      navigate("/signin");
    }
  }, [favorites, user]);

  return (
    <div>
      {favorites &&
        favorites.map((favorite, index) => (
          <div key={index}>
            <h1>{favorite.title}</h1>
            <p>{favorite.description}</p>
            <button
              onClick={() => handleRemoveFavorite(user.localId, favorite.id)}
            >
              Remove
            </button>
          </div>
        ))}
    </div>
  );
}

export default Favourite;
