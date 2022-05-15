import React, { useEffect, useState } from "react";
import "./MNav.scss";
import logo from "./res/logo.png";
import { Link, useLocation } from "react-router-dom";

import { useScrollDirection } from "react-use-scroll-direction";

export default function MNav({ searchToggle }) {
  const { isScrollingUp, isScrollingDown } = useScrollDirection();
  const [hide, setHide] = useState(false);
  const [glow, setGlow] = useState(false);
  const [expanded, setExpanded] = useState(false);
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
    <div
      className={`desktop-nav mobile-nav ${hide && "hide"} ${
        expanded && "expanded"
      }`}
    >
      <div className="top-bar">
        <Link to="/" className="nav-logo">
          <img className={`logo ${glow && "glow"}`} src={logo} alt="" />
          <div className={`logo-name ${glow && "glow"}`}>LEGiON</div>
        </Link>

        <div className="expander-cont">
          {!expanded ? (
            <i
              onClick={() => setExpanded(!expanded)}
              className="bx bx-menu"
            ></i>
          ) : (
            <i
              onClick={() => setExpanded(!expanded)}
              className="bx bx-chevron-up"
            ></i>
          )}
        </div>
      </div>

      <div className={`right-cont ${!expanded && "hide"}`}>
        <div className="nav-btn">Home</div>
        <div className="nav-btn">Most Played</div>
        <div className="nav-btn">Trending</div>
        <div className="nav-btn">Newest</div>
        <div className="nav-btn">Featured</div>
        <div
          onClick={() => {
            searchToggle(true);
            setExpanded(false);
          }}
          className="nav-btn"
        >
          Search
        </div>
        <div className="login-btn">Login</div>
      </div>
    </div>
  );
}
