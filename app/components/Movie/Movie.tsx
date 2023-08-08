import dynamic from "next/dynamic";
import { FC } from "react";
import { IMoviePage } from "../../../pages/movie/[slug]";
import Gallery from "../Gallery/Gallery";
import Banner from "../UI/Banner/Banner";
import Content from "./Content/Content";
import s from "./Movie.module.scss";
import { useUpdateCountOpened } from "./useCountOpened";

const DynamicVideo = dynamic(() => import("../UI/Video/Video"), {
  ssr: false,
});

const DynamicRating = dynamic(() => import("./RateMovie/RateMovie"), {
  ssr: false,
});

const Movie: FC<IMoviePage> = ({ movie, similarMovies }) => {
  useUpdateCountOpened(movie.slug);
  return (
    <div className={s.movie}>
      <Banner
        image={movie.bigPoster}
        Detail={() => <Content movie={movie} />}
      />
      <DynamicVideo slug={movie.slug} videoSource={movie.videoUrl} />
      <h2 className={s.title}>Similar</h2>
      <Gallery items={similarMovies} />
      <DynamicRating id={movie._id} slug={movie.slug} />
    </div>
  );
};

export default Movie;
