"use client"

import { FC } from "react";
import { useQuery } from "react-query";
import { MovieService } from "../../../services/movie.service";
import SkeletonLoader from "../../UI/Skeleton/Sketelon";
import s from "../Sidebar.module.scss";
import MovieList from "./MovieList";

const PopularMovies: FC = () => {
  const { isLoading, data: popularMovies } = useQuery(
    "Popular movies in sidebar",
    () => MovieService.getMostPopularMovies()
  );

  return (
    <div className={s.popularMovies}>
      {isLoading ? (
        <SkeletonLoader count={3} className={s.skeletonLoader} />
      ) : (
        <MovieList
          link="/trending"
          movies={popularMovies || []}
          title="Popular Movies"
        />
      )}
    </div>
  );
};

export default PopularMovies;
