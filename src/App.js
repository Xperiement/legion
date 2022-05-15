import "./App.scss";
import DNav from "./DNav";
import MNav from "./MNav";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import Play from "./pages/Play";
import { data, data2 } from "./res/data";
import SearchPanel from "./dpages/SearchPanel";
import { useState } from "react";

function App() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <DNav searchToggle={setShowSearch} />
      <MNav searchToggle={setShowSearch} />
      <SearchPanel state={showSearch} setState={setShowSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:name" element={<Play />} />
      </Routes>
    </>
  );
}

export default App;
