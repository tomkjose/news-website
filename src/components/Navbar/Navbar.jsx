import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../utils/redux/actions/authActions";
function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(signOut());
  };
  return (
    <div className="navbar">
      <div className="nav__logo">
        {" "}
        <i className="fa-solid fa-newspaper fa-lg "></i> News
      </div>
      <div className="nav__list">
        <li className="nav__list__item">
          <Link to="/" className="nav__link">
            {" "}
            <i className="fa-solid fa-house"></i>
            {""} <span className="nav__link">Home</span>
          </Link>
        </li>
        {user ? (
          <li className="nav__list__item">
            <Link to="/favourites" className="nav__link">
              {" "}
              <i
                className="fa-solid fa-heart "
                style={{ color: "#000000" }}
              ></i>
              {""} <span className="nav__link">Favourites</span>
            </Link>
          </li>
        ) : (
          ""
        )}
        {!user ? (
          <div className="nav__list">
            <li className="nav__list__item">
              <Link to="/signin">
                <button className="btn">Sign In</button>
              </Link>
            </li>
            <li className="nav__list__item">
              <Link to="/signup">
                <button className="btn">Sign Up</button>
              </Link>
            </li>
          </div>
        ) : (
          <li className="nav__list__item" onClick={handleLogOut}>
            <button className="btn">
              {" "}
              <i className="fa-solid fa-right-from-bracket"></i> Logout
            </button>
          </li>
        )}
      </div>
    </div>
  );
}

export default Navbar;
