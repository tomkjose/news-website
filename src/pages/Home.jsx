import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsList } from "../utils/redux/actions/newsActions";
import {
  addFavorite,
  fetchFavorites,
  removeFavorite,
} from "../utils/redux/actions/favoritesAction";
import { useNavigate } from "react-router-dom";
import HomeCard from "../components/HomeCard/HomeCard";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewsList());
  }, [dispatch]);
  const navigate = useNavigate();
  const newsList = useSelector((state) => state.news.newsList);
  const user = useSelector((state) => state.auth.user);
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleView = (id) => {
    navigate(`/post/${id}`);
  };

  useEffect(() => {
    if (user) {
      dispatch(fetchFavorites(user.localId));
    }
  }, [dispatch, favorites]);

  const handleFavorite = (localId, news) => {
    dispatch(addFavorite(localId, news));
  };

  const handleRemoveFavorite = (localId, newsId) => {
    dispatch(removeFavorite(localId, newsId));
  };

  return (
    <HomeCard
      newsList={newsList}
      favorites={favorites}
      user={user}
      handleFavorite={handleFavorite}
      handleRemoveFavorite={handleRemoveFavorite}
      handleView={handleView}
    />
  );
}

export default Home;
