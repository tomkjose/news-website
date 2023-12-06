import React, { useEffect } from "react";
import SignupCard from "../components/SignupCard/SignupCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Signup() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  return <SignupCard />;
}

export default Signup;
