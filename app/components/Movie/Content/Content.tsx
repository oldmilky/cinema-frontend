import { FC } from "react";
import { getActorUrl, getGenreUrl } from "../../../config/url.config";
import { IMovie } from "../../../shared/types/movie.types";
import FavoriteButton from "../../UI/Banner/FavoriteButton";
import MaterialIcon from "../../UI/MaterialIcon";
import s from "./Content.module.scss";
import ContentList from "./ContentList";

const Content: FC<{ movie: IMovie }> = ({ movie }) => {
  return (
    <div className={s.content}>
      <div className={s.container}>
        <p className={s.title}>{movie.title}</p>
        <div className={s.details}>
          <span className={s.span}>{movie.paramaters.year} - </span>
          <span className={s.span}>{movie.paramaters.country} - </span>
          <span className={s.span}>{movie.paramaters.duration} min.</span>
        </div>
        <ContentList
          name="Genres"
          links={movie.genres.slice(0, 3).map(g => ({
            _id: g._id,
            link: getGenreUrl(g.slug),
            title: g.name,
          }))}
        />
        <ContentList
          name="Actors"
          links={movie.actors.slice(0, 3).map(a => ({
            _id: a._id,
            link: getActorUrl(a.slug),
            title: a.name,
          }))}
        />
      </div>

      <div className={s.rating}>
        <FavoriteButton movieId={movie._id} />
        <div className={s.ratingWrap}>
          <MaterialIcon name="MdStars" />
          <span className={s.span}>{movie.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Content;
