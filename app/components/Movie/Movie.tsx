import { FC } from "react";
import { IMoviePage } from "../../../pages/movie/[slug]";
import Gallery from "../Gallery/Gallery";
import Banner from "../UI/Banner/Banner";
import Content from "./Content/Content";
import s from "./Movie.module.scss";

const Movie: FC<IMoviePage> = ({ movie, similarMovies }) => {
  return (
    <div className={s.movie}>
      <Banner
        image={movie.bigPoster}
        Detail={() => <Content movie={movie} />}
      />
      <h2 className={s.title}>Similar</h2>
      <Gallery items={similarMovies} />
    </div>
  );
};

export default Movie;
