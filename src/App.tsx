import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Landing, Movies, Series } from "./Pages";
import { MovieDetail } from "./Pages/MovieDetail";
import { SerieDetail } from "./Pages/SerieDetail";
import { useState } from "react";
import { Header } from "./Components";

function App() {
  const [searchInputString, setSearchInputString] = useState<string>(""); //primitivne vrijednosti se ne typeaju
  const [loading, setLoading] = useState<boolean>(false); //primitivne vrijednosti se ne typeaju
  const onSearch = (search: string) => {
    setSearchInputString(search);
  };
  const showLoader = (loader: boolean) => {
    setLoading(loader);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/*"
          element={
            <Landing
              header={
                <Header
                  onSearch={onSearch}
                  searchInputString={searchInputString}
                  loading={loading}
                />
              }
              showLoader={showLoader}
              searchInputString={searchInputString}
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
