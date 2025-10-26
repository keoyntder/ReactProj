import "./heroimgstyles.css";

import video from "../assets/vid.mp4";

import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <video className="video" src={video} autoPlay loop muted />
      </div>
      <div className="content">
        <p> WELCOME TO MY WEBSITE</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn"> Projects </Link>
          <Link to="/contact" className="btn btn-light"> Contact </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg
