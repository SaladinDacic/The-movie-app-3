import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./Pages";
import { MovieDetail } from "./Pages/MovieDetail";
import { SerieDetail } from "./Pages/SerieDetail";
import { useState } from "react";

function App() {
  const [searchInputString, setSearchInputString] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/*"
          element={
            <Landing
              searchInputString={searchInputString}
              loading={loading}
              setLoading={setLoading}
              setSearchInputString={setSearchInputString}
            />
          }
        />
        <Route path="/movie-details/:id" element={<MovieDetail />} />
        <Route path="/serie-details/:id" element={<SerieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
