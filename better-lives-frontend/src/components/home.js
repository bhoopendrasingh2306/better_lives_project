import React from "react";
import image1 from "../images/imag1.jpg";
import image2 from "../images/imag2.jpg";
import { Button, Input } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-div1">
      <div className="landing-img">
        <Button id="explore-btn" variant="contained">
          <Link to="/explore" style={{ textDecoration: "none" }}>
            Explore
          </Link>
        </Button>
        <div className="landing-text">
          <b>BETTER LIVES!</b>
        </div>
        <div className="landing-subtext">Explore For More In One...</div>
          <div className="slider-frame">
            <div className="slide-images">
              <div className="img-container"><img src={image1}></img></div>
              <div className="img-container"><img src={image2}></img></div>
              <div className="img-container"><img src={image1}></img></div>
            </div>
          </div>
        <div className="madeby">
          <b>Made By - Bhoopendra Singh</b>
        </div>
      </div>
      {/* <div className="landing-img2" >
                <div className="landing-contact">
                    <h1> About</h1>
                    <h1>contact me</h1>
                </div>
                </div>                      */}
    </div>
  );
}

export default Home;
