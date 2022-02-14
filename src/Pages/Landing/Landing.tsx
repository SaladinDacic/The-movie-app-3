import { Routes, Route, Navigate } from "react-router-dom";
import { Movies, Series } from "..";
import { Header } from "../../Components";
import "./Landing.scss";
import { HeaderProps } from "../../Components";
//novi interface za Landing
interface LandingProps {
  header: JSX.Element;
  searchInputString: string;
  showLoader: (loader: boolean) => void;
}
export const Landing = ({
  header,
  searchInputString,
  showLoader,
}: LandingProps) => {
  return (
    <div className="Landing">
      {header}
      <Routes>
        <Route path="/*" element={<Navigate to={"/movies"} />} />
        <Route
          path="/movies"
          element={
            <Movies
              showLoader={showLoader}
              searchInputString={searchInputString}
            />
          }
        />
        <Route
          path="/series"
          element={
            <Series
              showLoader={showLoader}
              searchInputString={searchInputString}
            />
          }
        />
      </Routes>
    </div>
  );
};
