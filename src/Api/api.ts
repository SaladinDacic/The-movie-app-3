import axios from "axios"
export async function getMovieDetail(id: string) {
  let response = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a7bf3fc23fd9bca63fe289845fd702dd&language=en-US`)
  return response
}
export async function getSerieDetail(id: string) {
  let response = axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=a7bf3fc23fd9bca63fe289845fd702dd&language=en-US`)
  return response
}
export async function getListOfMovies() {
  let response = axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=a7bf3fc23fd9bca63fe289845fd702dd&language=en-US&page=1")
  return response
}
export async function getListOfMoviesUsingString(str: string) {
  let response = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a7bf3fc23fd9bca63fe289845fd702dd&language=en-US&query=${str}&page=1&include_adult=false`)
  return response
}
export async function getListOfSeries() {
  let response = axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=a7bf3fc23fd9bca63fe289845fd702dd&language=en-US&page=1")
  return response
}
export async function getListOfSeriesUsingString(str: string) {
  let response = axios.get(`https://api.themoviedb.org/3/search/tv?api_key=a7bf3fc23fd9bca63fe289845fd702dd&language=en-US&page=1&query=${str}&include_adult=false`)
  return response
}
