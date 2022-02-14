import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListOfSeries, getListOfSeriesUsingString } from "../../Api";
import "./Series.scss";
import { HeaderProps } from "../../Components";
interface MovieObjProps {
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  genre_ids: number[];
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface SerieProps {
  showLoader: (loader: boolean) => void;
  searchInputString: string;
}
export const Series = ({ showLoader, searchInputString }: SerieProps) => {
  const [movieListData, setMovieListData] = useState<MovieObjProps[]>();
  useEffect(() => {
    let str = searchInputString;
    (async function fillListOfData() {
      showLoader(true);
      if (str && str.length > 3) {
        let response = await getListOfSeriesUsingString(str);
        setMovieListData(response.data.results);
      } else {
        let response = await getListOfSeries();
        setMovieListData(response.data.results);
      }
      showLoader(false);
    })();
  }, [searchInputString]);

  return (
    <div className="Series">
      {movieListData &&
        movieListData.map((movieObj) => {
          const typedMovieObj = movieObj as MovieObjProps;
          return (
            <Link
              key={typedMovieObj.id}
              to={`/serie-details/${typedMovieObj.id}`}
            >
              <img
                src={`https://www.themoviedb.org/t/p/w780${typedMovieObj.poster_path}`}
                alt=""
              />
            </Link>
          );
        })}
    </div>
  );
};
