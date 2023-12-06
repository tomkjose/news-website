import React, { useEffect } from "react";
import SigninCard from "../components/SigninCard/SigninCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Signin() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  return <SigninCard />;
}

export default Signin;
