import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../utils/redux/actions/authActions";
import { useNavigate } from "react-router-dom";

function SignupCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const userData = {
    email,
    password,
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
    <div>
      <form method="POST" onSubmit={handleSignUp}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{loading ? "Sign Up..." : "Sign Up"}</button>
      </form>
    </div>
  );
}

export default SignupCard;
