import React, { useEffect } from "react";
import {
  fetchFavorites,
  removeFavorite,
} from "../utils/redux/actions/favoritesAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../styles/favourite.css";
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
    <div className="grid__container fav__posts">
      {favorites &&
        favorites.map((favorite, index) => (
          <div key={index} className="grid__item">
            <img
              src={favorite.urlToImage}
              alt={favorite.title}
              className="grid__image"
            />
            <div className="fav_details">
              <h1>{favorite.title}</h1>
              <p>{favorite.description}</p>
              <div className="button__container">
                <i
                  className="fa-solid fa-heart fa-2xl"
                  style={{ color: "#ff8c4a" }}
                  onClick={() =>
                    handleRemoveFavorite(user.localId, favorite.id)
                  }
                ></i>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Favourite;
