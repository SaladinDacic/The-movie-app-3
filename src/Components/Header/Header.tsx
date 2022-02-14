import { NavLink } from "react-router-dom";
import "./Header.scss";

export interface HeaderProps {
  loading?: boolean;
  onSearch: (search: string) => void;
  searchInputString: string;
}
export const Header = ({
  loading,
  onSearch,
  searchInputString,
}: HeaderProps) => {
  return (
    <div className="Header">
      <div className="Header__tabs">
        <NavLink className="inactive" to="/movies">
          Movies
        </NavLink>
        <NavLink className="inactive" to="/series">
          TV Shows
        </NavLink>
      </div>
      <div className="Header__search">
        <h4>Search Movies/Series</h4>
        <div className="Header__search--inputAndIcon">
          <input
            onChange={(evt) => {
              onSearch(evt.target.value);
            }}
            name="search"
            value={searchInputString}
          />

          {loading !== undefined && loading === false ? (
            <i className="fab fa-searchengin"></i>
          ) : (
            <i className="fas fa-spinner animate-spinn"></i>
          )}
        </div>
      </div>
    </div>
  );
};
