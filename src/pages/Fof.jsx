import React from "react";
import { Link } from "react-router-dom";
import "../styles/fof.css";
import "../styles/index.css";
import FofImage from "../assets/images/404.gif";
function Fof() {
  return (
    <div className="fof">
      <div className="fof__card">
        <img src={FofImage} alt="404" />
        <Link to="/">
          {" "}
          <button className="btn">Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Fof;
