import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../../Api";
import { DoughnutChart } from "../../Components";
import "./MovieDetail.scss";
interface DetailedMovieInterface {
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  id: number;
  title: string;
  original_title: string;
  tagline: string;
  original_language: string;
  spoken_languages: {}[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  belongs_to_collection: any;
  budget: number;
  genres: {}[];
  homepage: string;
  imdb_id: string;
  overview: string;
  production_companies: {}[];
  production_countries: {}[];
  revenue: string;
  runtime: string;
  status: string;
}

export const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState<DetailedMovieInterface>();
  let { id } = useParams();
  useEffect(() => {
    (async function getMovieData() {
      if (id !== undefined) {
        let response = await getMovieDetail(id);
        console.log(response.data);
        setMovieDetail(response.data);
      }
    })();
  }, []);

  return (
    <div className="MovieDetail">
      <img
        className="MovieDetail__backImg"
        src={
          movieDetail &&
          `https://www.themoviedb.org/t/p/w780${movieDetail.backdrop_path}`
        }
        alt={movieDetail?.original_title}
      />
      <img
        className="MovieDetail__posterImg"
        src={
          movieDetail &&
          `https://www.themoviedb.org/t/p/w780${movieDetail.poster_path}`
        }
        alt={movieDetail?.title}
      />
      <div className="MovieDetail__textContainer">
        <div className="MovieDetail__textContainer--title">
          <h1>{movieDetail?.title}</h1>
          <h1>{movieDetail?.release_date}</h1>
        </div>
        <div className="MovieDetail__textContainer--chart">
          {movieDetail && (
            <DoughnutChart vote={movieDetail.vote_average * 10} />
          )}
        </div>
        <div className="MovieDetail__textContainer--desc">
          <h3>{movieDetail?.tagline}</h3>
          <p>{movieDetail?.overview}</p>
        </div>
      </div>
    </div>
  );
};
