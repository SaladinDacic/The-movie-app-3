import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSerieDetail as getSerieDetail } from "../../Api";
import "./SerieDetail.scss";
import { DoughnutChart } from "../../Components";
interface DetailedSerieInterface {
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  created_By: any[];
  episode_run_time: number[];
  in_production: boolean;
  id: number;
  name: string;
  original_name: string;
  networks: {}[];
  number_of_episodes: number;
  number_of_seasons: number;
  tagline: string;
  original_language: string;
  languages: {}[];
  spoken_languages: {}[];
  popularity: number;
  first_air_date: string;
  last_air_date: string;
  last_episode_to_air: {};
  video: boolean;
  vote_average: number;
  vote_count: number;
  belongs_to_collection: any;
  budget: number;
  genres: {}[];
  homepage: string;
  imdb_id: string;
  overview: string;
  origin_country: string[];
  production_companies: {}[];
  production_countries: {}[];
  revenue: string;
  runtime: string;
  status: string;
  seasons: {}[];
  type: string;
}
export const SerieDetail = () => {
  const [serieDetail, setSerieDetail] = useState<DetailedSerieInterface>();
  let { id } = useParams();
  useEffect(() => {
    (async function getSerieData() {
      if (id !== undefined) {
        let response = await getSerieDetail(id);
        console.log(response.data);
        setSerieDetail(response.data);
      }
    })();
  }, []);

  return (
    <div className="SerieDetail">
      <img
        className="SerieDetail__backImg"
        src={
          serieDetail &&
          `https://www.themoviedb.org/t/p/w780${serieDetail.backdrop_path}`
        }
        alt={serieDetail?.original_name}
      />
      <img
        className="SerieDetail__posterImg"
        src={
          serieDetail &&
          `https://www.themoviedb.org/t/p/w780${serieDetail.poster_path}`
        }
        alt={serieDetail?.name}
      />
      <div className="SerieDetail__textContainer">
        <div className="SerieDetail__textContainer--title">
          <h1>{serieDetail?.name}</h1>
          <h1>{serieDetail?.first_air_date}</h1>
        </div>
        <div className="SerieDetail__textContainer--chart">
          {serieDetail && (
            <DoughnutChart vote={serieDetail.vote_average * 10} />
          )}
        </div>
        <div className="SerieDetail__textContainer--desc">
          <h3>{serieDetail?.tagline}</h3>
          <p>{serieDetail?.overview}</p>
        </div>
      </div>
    </div>
  );
};
