import { FC } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { useFavorites } from "../../../UI/Favorites/useFavorites";
import SkeletonLoader from "../../../UI/Skeleton/Sketelon";
import s from "../../Sidebar.module.scss";
import MovieList from "../MovieList";
import NotAuthFavorites from "./NotAuthFavorites";

const FavoriteMovies: FC = () => {
  const { favoriteMovies, isLoading } = useFavorites();
  const { user } = useAuth();

  if (!user) return <NotAuthFavorites />;

  return isLoading ? (
    <SkeletonLoader count={3} className={s.skeletonLoader} />
  ) : (
    <MovieList
      link="/favorites"
      movies={favoriteMovies?.slice(0, 3) || []}
      title="Favorites"
    />
  );
};

export default FavoriteMovies;
