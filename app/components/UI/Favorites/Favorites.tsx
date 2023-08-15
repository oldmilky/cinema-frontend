import { FC } from "react";
import { getMovieUrl } from "../../../config/url.config";
import SkeletonLoader from "../Skeleton/Sketelon";
import s from "./Favorites.module.scss";
import FavoriteItem from "./FavoritesItem";
import { useFavorites } from "./useFavorites";

const Favorites: FC = () => {
  const { favoriteMovies, isLoading } = useFavorites();

  return (
    <>
    <h1 className={s.title}>Favorite Movies</h1>
    <section className={s.favorites}>
      {isLoading ? (
        <SkeletonLoader count={3} className={s.skeletonLoader} />
      ) : (
        favoriteMovies?.map(movie => (
          <>
            <FavoriteItem
              key={movie._id}
              item={{
                name: movie.title,
                posterPath: movie.bigPoster,
                link: getMovieUrl(movie.slug),
                title: movie.title,
                _id: movie._id,
              }}
            />
          </>
        ))
      )}
    </section>
    </>
    
  );
};

export default Favorites;
