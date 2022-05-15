import React from "react";
import { Link } from "react-router-dom";
import "./VerticalContent.scss";

export default function VerticalContent({ title, data = [] }) {
  return (
    <div className="content vertical">
      <p>{title}</p>
      <div className="card-list">
        {data.map((item, key) => (
          <Link
            to={`/game/${item.title}`}
            key={key}
            className="content-card"
            style={{ backgroundImage: "url(" + item.cover + ")" }}
          >
            <div className="card-info">{item.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
