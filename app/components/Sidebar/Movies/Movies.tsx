import { FC } from "react";
import FavoriteMovies from "./FavoriteMovies/FavoriteMovies";
import PopularMovies from "./PopularMovies";

const Movies: FC = () => {
  return (
    <div>
      <PopularMovies />
      <FavoriteMovies />
    </div>
  )
};

export default Movies;
