import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import starColor from "../../../assets/images/starColor.svg";
import { getGenreUrl, getMovieUrl } from "../../../config/url.config";
import { IMovie } from "../../../shared/types/movie.types";
import { getGenresListEach } from "../../../utils/movie/getGenresList";
import s from "../Sidebar.module.scss";

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
  return (
    <div className={s.popularContainer}>
      <Link href={getMovieUrl(movie.slug)}>
        <Image className={s.poster} src={movie.poster} width="70" height="110" alt="poster" priority />
      </Link>
      <div className={s.popularWrap}>
        <div className={s.popularWrapper}>
          <h2 className={s.popularTitle}>{movie.title}</h2>
          <p className={s.popularSubtitle}>
            {movie.genres.map((genre, index) => (
              <Link key={genre._id} href={getGenreUrl(genre.slug)}>
                {getGenresListEach(index, movie.genres.length, genre.name)}
              </Link>
            ))}
          </p>
        </div>
        <div className={s.popularStars}>
          <Image className={s.popularIcon} src={starColor} alt="star" />
          <p className={s.popularStar}>{Number(movie.rating).toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
