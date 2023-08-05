import { FC } from "react";
import SkeletonLoader from "../../UI/Skeleton/Sketelon";
import s from "../Navigation.module.scss";
import Menu from "../menu/Menu";
import { usePopularGenres } from "./usePopularGenres";

const GenreMenu: FC = () => {
  const { isLoading, data } = usePopularGenres();

  return (
    <div>
      {isLoading ? (
        <SkeletonLoader count={4} className={s.skeletonLoader} />
      ) : (
        <Menu
          menu={{
            title: "Popular genres",
            items: data || [],
          }}
        />
      )}
    </div>
  );
};

export default GenreMenu;
