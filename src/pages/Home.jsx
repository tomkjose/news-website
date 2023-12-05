import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsList } from "../utils/redux/actions/newsActions";
import { addToFavorites } from "../utils/firebase/addFavorite";
import { fetchFavorites } from "../utils/redux/actions/favoritesAction";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewsList());
  }, [dispatch]);

  const newsList = useSelector((state) => state.news.newsList);
  const user = useSelector((state) => state.auth.user);
  const favorites = useSelector((state) => state.favorites.favorites);
  useEffect(() => {
    if (user) {
      dispatch(fetchFavorites(user.localId));
    }
  }, []);

  const handleFavorite = (localId, news) => {
    addToFavorites(localId, news);
    console.log("news", news);
    console.log("localId", localId);
  };

  console.log("favorites", favorites);
  return (
    <div>
      <div>
        {newsList &&
          newsList.map((news, index) => {
            return (
              <div key={index}>
                <h1>{news.title}</h1>
                <p>{news.description}</p>
                {user ? (
                  <button onClick={() => handleFavorite(user.localId, news)}>
                    Love
                  </button>
                ) : (
                  ""
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
