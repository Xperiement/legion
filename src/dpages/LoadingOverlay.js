import React, { useEffect, useState } from "react";
import "./LoadingOverlay.scss";

export default function LoadingOverlay() {
  const [hide, setHide] = useState(false);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setHide(true);
      setTimeout(() => {
        setDisable(true);
      }, 700);
    }, 5000);
  });

  return disable ? null : (
    <div className={`loading-overlay ${hide && "hide"}`}>
      <iframe
        title="krunker"
        allowFullScreen={false}
        scrolling="no"
        src="https://epicx67.github.io/"
      >
        {" "}
      </iframe>
    </div>
  );
}
