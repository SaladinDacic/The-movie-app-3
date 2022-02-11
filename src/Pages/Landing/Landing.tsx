import { Routes, Route, Navigate } from "react-router-dom";
import { Movies, Series } from "..";
import { Header } from "../../Components";
import "./Landing.scss";
import { HeaderProps } from "../../Components";
export const Landing = (HeaderProps: HeaderProps) => {
  return (
    <div className="Landing">
      <Header {...HeaderProps} />
      <Routes>
        <Route path="/*" element={<Navigate to={"/movies"} />} />
        <Route path="/movies" element={<Movies {...HeaderProps} />} />
        <Route path="/series" element={<Series {...HeaderProps} />} />
      </Routes>
    </div>
  );
};
