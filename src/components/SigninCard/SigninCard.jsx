import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../utils/redux/actions/authActions";
import "@fortawesome/fontawesome-free/css/all.css";
import "./SigninCard.css";
import "../../styles/index.css";
function SigninCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [loading, setLoading] = useState(false);
  const userData = {
    email,
    password,
  };
  const handlePasswordView = () => {
    setIsHidden(!isHidden);
  };
  const handleSignIn = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log("Sign Up Submitted");
    try {
      dispatch(signIn(userData));
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log("Error in Sign In");
      setLoading(false);
    }
  };

  return (
    <div className="signin__card">
      <h2 className="signin__title">Sign In</h2>
      <form method="POST" onSubmit={handleSignIn} className="signin__form">
        <div className="signin__inputbox">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
            className="signin__input"
          />
        </div>
        <div className="signin__inputbox">
          <input
            type={isHidden ? "password" : "text"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="signin__input"
            required
          />
          {isHidden ? (
            <i
              className="fa-solid fa-eye fa-lg sign__view__toggle"
              onClick={handlePasswordView}
            ></i>
          ) : (
            <i
              className="fa-solid fa-eye-slash fa-lg sign__view__toggle"
              onClick={handlePasswordView}
            ></i>
          )}
        </div>
        <button type="submit" className="btn signin_btn">
          {loading ? "Sign In..." : "Sign In"}
        </button>
      </form>
      <div className="create">
        Don't have an account?<Link to="/signup"> Sign up</Link>
      </div>
    </div>
  );
}

export default SigninCard;
