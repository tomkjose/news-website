import React, { useEffect } from "react";
import { fetchFavorites } from "../utils/redux/actions/favoritesAction";
import { useDispatch, useSelector } from "react-redux";
function Favourite() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const handleRemoveFavorite = (id) => {};
  useEffect(() => {
    if (user) {
      dispatch(fetchFavorites(user.localId));
    }
  }, []);
  return (
    <div>
      {favorites &&
        favorites.map((favorite, index) => (
          <div key={favorite.id}>
            <h1>{favorite.title}</h1>
            <p>{favorite.description}</p>
            <button onClick={() => handleRemoveFavorite()}>Remove</button>
          </div>
        ))}
    </div>
  );
}

export default Favourite;
