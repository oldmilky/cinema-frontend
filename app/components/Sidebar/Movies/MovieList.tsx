import { FC } from "react";
import { IMovieList } from "./Movie-list.interface";
import MovieItem from "./MovieItem";

const MovieList: FC<IMovieList> = ({ link, title, movies }) => {
  return (
    <>
      {movies.slice(3, 6).map(movie => (
        <MovieItem key={movie._id} movie={movie} />
      ))}
    </>
  );
};

export default MovieList;
