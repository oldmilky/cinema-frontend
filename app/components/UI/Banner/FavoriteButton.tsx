import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useMutation } from "react-query";
import heart from "../../../assets/images/heart.svg";
import heartColor from "../../../assets/images/heartColor.svg";
import { UserService } from "../../../services/user.service";
import { toastError } from "../../../utils/toast-error";
import { useFavorites } from "../Favorites/useFavorites";
import s from "./Banner.module.scss";

const FavoriteButton: FC<{ movieId: string }> = ({ movieId }) => {
  const [isSmashed, setIsSmashed] = useState(false);

  const { favoriteMovies, refetch } = useFavorites();

  useEffect(() => {
    if (!favoriteMovies) return;

    const isHasMovie = favoriteMovies.some(f => f._id === movieId);
    if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie);
  }, [favoriteMovies, movieId, isSmashed]);

  const { mutateAsync } = useMutation(
    "update favorites",
    () => UserService.toggleFavorite(movieId),
    {
      onSuccess() {
        setIsSmashed(!isSmashed);
        refetch();
      },
      onError: error => {
        toastError(error, "Update favorites list");
      },
    }
  );

  return (
    <Image
      className={s.favoriteButton}
      src={isSmashed ? heartColor : heart}
      onClick={() => mutateAsync()}
      alt={"favorite"}
    />
  );
};

export default FavoriteButton;
