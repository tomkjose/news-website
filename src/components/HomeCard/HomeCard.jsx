import React, { useState } from "react";
import "./HomeCard.css";
import "../../styles/index.css";

function HomeCard({
  user,
  newsList,
  handleFavorite,
  handleRemoveFavorite,
  handleView,
  favorites,
}) {
  const [isGrid, setIsGrid] = useState(false);

  const handleGridView = () => {
    setIsGrid(!isGrid);
  };

  return (
    <div className="home__card">
      <div className="view__container">
        {user ? (
          <div className="user__card">
            Welcome back <span>{user.email}</span>
          </div>
        ) : (
          ""
        )}
        <div>
          <button className="btn" onClick={handleGridView}>
            {isGrid ? (
              <i className="fas fa-th-large fa-2xl"></i>
            ) : (
              <i className="fas fa-list fa-2xl"></i>
            )}
          </button>
        </div>
      </div>

      {isGrid ? (
        <div className="grid__container">
          {newsList &&
            newsList.map((news, index) => {
              const favoriteIndex = favorites.findIndex(
                (fav) => fav.url === news.url
              );
              return (
                <div key={index} className="grid__item">
                  <img
                    src={news.urlToImage}
                    alt={news.title}
                    className="grid__image"
                  />
                  <h2>{news.title}</h2>
                  <div className="button__container">
                    <button onClick={() => handleView(index)} className="btn">
                      Read More
                    </button>
                    {user && favoriteIndex !== -1 ? (
                      <i
                        className="fa-solid fa-heart fa-2xl"
                        style={{ color: "#ff8c4a" }}
                        onClick={() =>
                          handleRemoveFavorite(
                            user.localId,
                            favorites[favoriteIndex].id
                          )
                        }
                      ></i>
                    ) : (
                      <i
                        onClick={() => handleFavorite(user.localId, news)}
                        className="fa-solid fa-heart fa-2xl"
                        style={{ color: "#000000" }}
                      ></i>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div className="list__container">
          {newsList &&
            newsList.map((news, index) => {
              const favoriteIndex = favorites.findIndex(
                (fav) => fav.url === news.url
              );
              return (
                <div key={index} className="home__container">
                  <img
                    src={news.urlToImage}
                    alt={news.title}
                    className="post__image"
                  />
                  <div className="post__details">
                    <h1>{news.title}</h1>
                    <div className="button__container">
                      <button onClick={() => handleView(index)} className="btn">
                        Read More
                      </button>
                      {user && favoriteIndex !== -1 ? (
                        <i
                          className="fa-solid fa-heart fa-2xl"
                          style={{ color: "#ff8c4a" }}
                          onClick={() =>
                            handleRemoveFavorite(
                              user.localId,
                              favorites[favoriteIndex].id
                            )
                          }
                        ></i>
                      ) : (
                        <i
                          onClick={() => handleFavorite(user.localId, news)}
                          className="fa-solid fa-heart fa-2xl"
                          style={{ color: "#000000" }}
                        ></i>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default HomeCard;