import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListOfMovies, getListOfMoviesUsingString } from "../../Api";
import "./Movies.scss";
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
export const Movies = ({ setLoading, searchInputString }: HeaderProps) => {
  const [movieListData, setMovieListData] = useState<MovieObjProps[]>();
  useEffect(() => {
    let str = searchInputString;
    (async function fillListOfData() {
      setLoading(true);
      if (str && str.length > 3) {
        let response = await getListOfMoviesUsingString(str);
        setMovieListData(response.data.results);
      } else {
        let response = await getListOfMovies();
        setMovieListData(response.data.results);
      }
      setLoading(false);
    })();
  }, [searchInputString]);

  return (
    <div className="Movies">
      {movieListData &&
        movieListData.map((movieObj) => {
          const typedMovieObj = movieObj as MovieObjProps;
          return (
            <Link
              key={typedMovieObj.id}
              to={`/movie-details/${typedMovieObj.id}`}
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
