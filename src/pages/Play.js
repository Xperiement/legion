import React, { useEffect, useState } from "react";
import LoadingOverlay from "../dpages/LoadingOverlay";
import "./Play.scss";

import { Link, useParams } from "react-router-dom";
import { data, data2, shuffle } from "../res/data";
import Content from "../components/Content";

export default function Play() {
  const [fullscreen, setFullscreen] = useState(false);
  const [gameInfo, setGameInfo] = useState({});
  const [err, setErr] = useState(false);
  const params = useParams();

  useEffect(() => {
    const gameName = params.name;
    let found = data.find(
      (item) => item.title.toLowerCase() === gameName.toLowerCase()
    );

    if (!found) {
      found = data2.find(
        (item) => item.title.toLowerCase() === gameName.toLowerCase()
      );
    }

    if (!found) {
      setErr(true);
      return;
    }

    setGameInfo(found);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goto = (url) => {
    const link = document.createElement("a");
    link.target = "blank";
    link.href = url;
    link.click();
  };
  return (
    <div className="play">
      <LoadingOverlay />
      <div className={`play-cont ${fullscreen && "fullscreen"}`}>
        <div className="game-cont">
          <iframe
            title="krunker"
            src={gameInfo.url}
            className="game fullscreen"
            allowFullScreen={true}
          ></iframe>

          <div className="play-down-bar">
            <div className="expander">
              <div className="pill"></div>
            </div>
            <div className="play-info">{gameInfo.title}</div>
            <div className="play-actions">
              <Link to="/" style={{ color: "var(--text)" }}>
                <i
                  onClick={() => setFullscreen(!fullscreen)}
                  className="bx bx-chevron-left"
                ></i>
              </Link>
              <i
                onClick={() => goto(gameInfo.url)}
                className="bx bxs-window-alt"
              ></i>
              <i
                onClick={() => setFullscreen(!fullscreen)}
                className="bx bx-fullscreen"
              ></i>
              <i
                onClick={() => setFullscreen(!fullscreen)}
                className="bx bx-exit-fullscreen"
              ></i>
            </div>
          </div>
          <Content title="Recommanded games for you" data={shuffle(data)} />
        </div>
      </div>
    </div>
  );
}
