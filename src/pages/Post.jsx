import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchNewsList } from "../utils/redux/actions/newsActions";
import userImage from "../assets/images/user.avif";
import "../styles/post.css";
function Post() {
  const id = useParams();
  const newsList = useSelector((state) => state.news.newsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewsList());
  }, [dispatch]);
  const [selectedNews, setSelectedNews] = useState();
  useEffect(() => {
    if (newsList) {
      const newsPost = newsList[id.id];
      setSelectedNews(newsPost);
    }
  }, [selectedNews, newsList]);

  return (
    <div className="post__card">
      {selectedNews ? (
        <div className="post__containers">
          <div className="image__container">
            {" "}
            <img
              src={selectedNews.urlToImage}
              alt={selectedNews.title}
              className="image"
            />
          </div>
          <div className="postcard__title">
            <h1>{selectedNews.title}</h1>
          </div>
          <div className="postcard__description">
            <p>{selectedNews.description}</p>
          </div>
          <div className="postcard__content">
            <p>{selectedNews.content}</p>
          </div>
          <div className="postcard__author">
            <img
              src={userImage}
              alt={selectedNews.author}
              className="author__image"
            />
            <div className="author__details">
              <p className="author__name">{selectedNews.author}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Post;
