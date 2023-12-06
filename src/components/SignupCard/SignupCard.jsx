import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../utils/redux/actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import "./SignupCard.css";
import "../../styles/index.css";
function SignupCard() {
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

  const handleSignUp = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log("Sign Up Submitted");
    try {
      dispatch(signUp(userData));
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log("Error in Sign Up");
      setLoading(false);
    }
  };

  return (
    <div className="signup__card">
      <h2 className="signup__title">Sign Up</h2>
      <form method="POST" onSubmit={handleSignUp} className="signup__form">
        <div className="signup__inputbox">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="signup__input"
          />
        </div>
        <div className="signup__inputbox">
          <input
            type={isHidden ? "password" : "text"}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="signup__input"
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
        <button type="submit" className="btn signup_btn">
          {loading ? "Sign Up..." : "Sign Up"}
        </button>
      </form>
      <div className="login">
        Have an account? <Link to="/signin">Log in</Link>
      </div>
    </div>
  );
}

export default SignupCard;
