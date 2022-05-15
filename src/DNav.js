import React, { useEffect, useState } from "react";
import "./DNav.scss";
import logo from "./res/logo.png";

import { useScrollDirection } from "react-use-scroll-direction";
import { Link, useLocation } from "react-router-dom";

export default function DNav({ searchToggle }) {
  const { isScrollingUp, isScrollingDown } = useScrollDirection();
  const [hide, setHide] = useState(false);
  const [glow, setGlow] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (isScrollingUp) {
      setHide(false);
    }

    if (isScrollingDown) {
      setHide(true);
    }
  }, [isScrollingUp, isScrollingDown]);

  useEffect(() => {
    setGlow(location.pathname.includes("/game/") ? true : false);
  }, [location.pathname]);

  return (
    <div className={`desktop-nav ${hide && "hide"}`}>
      <Link to="/" className="nav-logo">
        <img className={`logo ${glow && "glow"}`} src={logo} alt="" />
        <div className={`logo-name ${glow && "glow"}`}>LEGiON</div>
      </Link>
      <div className="right-cont">
        <div className="nav-btn">Home</div>
        <div className="nav-btn">Most Played</div>
        <div className="nav-btn">Trending</div>
        <div className="nav-btn">Newest</div>
        <div className="nav-btn">Featured</div>
        <div onClick={() => searchToggle(true)} className="nav-btn">
          Search
        </div>
        <div className="login-btn">Login</div>
      </div>
    </div>
  );
}
