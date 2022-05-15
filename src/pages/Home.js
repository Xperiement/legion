import React from "react";
import "./Home.scss";
import Content from "../components/Content";

import VerticalContent from "../components/VerticalContent";

import { Link } from "react-router-dom";
import { data, data2, heroGame, shuffle } from "../res/data";

export default function Home() {
  return (
    <div className="home">
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroGame.cover})` }}
      >
        <div className="hero-cont">
          <div className="game-head">
            <img src={heroGame.logo} alt=""></img>
            <img src={heroGame.title_logo} alt=""></img>
          </div>
          <div className="game-info">
            <div className="info">{heroGame.info}</div>
            <Link className="play-btn" to={`/game/${heroGame.title}`}>
              <i className="bx bx-play"></i>Play
            </Link>
          </div>
        </div>
      </section>
      <Content title="Recommanded games for you" data={shuffle(data)} />
      <VerticalContent title="Recently played" data={shuffle(data2)} />
    </div>
  );
}
