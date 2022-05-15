import React, { useEffect, useState } from "react";
import "./SearchPanel.scss";

import { data, data2 } from "../res/data";
import { Link } from "react-router-dom";

export default function SearchPanel({ state, setState }) {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const nSearch = search.toLowerCase().trim();
    if (nSearch === "") {
      setSearchResult([]);
      return;
    }

    const f1 = data.filter((item) =>
      item.title.toLowerCase().includes(nSearch)
    );
    const f2 = data2.filter((item) =>
      item.title.toLowerCase().includes(nSearch)
    );

    setSearchResult([...f1, ...f2]);
  }, [search]);

  return (
    state && (
      <div className="search-panel">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search game"
        ></input>

        <div className="resultList">
          {searchResult.map((item, key) => (
            <Link
              onClick={() => setState(false)}
              to={`/game/${item.title}`}
              key={key}
              className="resultCard"
            >
              <div
                className="card-logo"
                style={{ backgroundImage: "url(" + item.cover + ")" }}
              ></div>
              <div className="card-title">{item.title}</div>
            </Link>
          ))}
          {searchResult.length === 0 && (
            <div key="404NotFound" className="resultCardNotFound">
              <i className="bx bx-category-alt"></i>
              <div className="card-title">Nothing is there</div>
            </div>
          )}
        </div>
        <button onClick={() => setState(false)}>Close Search</button>
      </div>
    )
  );
}
