import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../utils/redux/actions/authActions";
function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(signOut());
  };
  return (
    <div>
      <div>Logo</div>
      <div className="nav__list">
        <li>
          <Link to="/">Home</Link>
        </li>
        {user ? (
          <li>
            <Link to="/favourites">favourites</Link>
          </li>
        ) : (
          ""
        )}
        {!user ? (
          <div className="nav__list">
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </div>
        ) : (
          <li>
            <button onClick={handleLogOut}>Logout</button>
          </li>
        )}
      </div>
    </div>
  );
}

export default Navbar;
