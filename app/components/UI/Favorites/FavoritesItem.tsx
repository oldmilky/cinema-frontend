import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import FavoriteButton from "../Banner/FavoriteButton";
import { IFavoriteItem } from "./Favorites.interface";
import s from "./Favorites.module.scss";

const FavoriteItem: FC<{ item: IFavoriteItem }> = ({ item }) => {
  return (
    <div className={s.container}>
      <div className={s.wrap}>
        <FavoriteButton movieId={item._id} />
      </div>
      <div className={s.favoritesItem}>
        <Image
          alt={item.name}
          src={item.posterPath}
          draggable={false}
          priority
          layout="fill"
        />
        <Link href={item.link}>
          <div className={s.content}>
            <h1 className={s.title}>{item.title}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FavoriteItem;
