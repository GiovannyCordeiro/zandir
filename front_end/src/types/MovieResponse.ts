import { Movie } from "./Movie";

export interface MovieResponse {
  movies: Movie[];
  Error: string;
}
