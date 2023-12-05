import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../utils/redux/actions/authActions";

function SigninCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const userData = {
    email,
    password,
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
    <div>
      <form method="POST" onSubmit={handleSignIn}>
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
        <button type="submit">{loading ? "Sign In..." : "Sign In"}</button>
      </form>
    </div>
  );
}

export default SigninCard;
