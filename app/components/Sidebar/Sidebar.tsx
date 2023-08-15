import dynamic from "next/dynamic";
import Link from "next/link";
import { FC } from "react";
import PopularMovies from "./Movies/PopularMovies";
import Search from "./Search/Search";
import s from "./Sidebar.module.scss";

const Sidebar: FC = () => {
  const DynamicFavoriteMovies = dynamic(
    () => import("./Movies/FavoriteMovies/FavoriteMovies"),
    {
      ssr: false,
    }
  );

  return (
    <section className={s.sidebar}>
      <Search />

      <div className={s.popular}>
        <h1 className={s.title}>Popular Movies</h1>
        <PopularMovies />
        <Link className={s.buttonMore} href="/trending">
          See more
        </Link>
      </div>

      <div className={s.popular}>
        <h1 className={s.title}>Favorites</h1>
        <DynamicFavoriteMovies />
        <Link className={s.buttonMore} href="/trending">
          See more
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
