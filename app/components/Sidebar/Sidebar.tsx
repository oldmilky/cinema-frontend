import Link from "next/link";
import { FC } from "react";
import Movies from "./Movies/Movies";
import Search from "./Search/Search";
import s from "./Sidebar.module.scss";

const Sidebar: FC = () => {
  return (
    <section className={s.sidebar}>
      <Search />

      <div className={s.popular}>
        <h1 className={s.title}>Popular Movies</h1>
        <Movies />
      </div>

      <div className={s.buttons}>
        <Link className={s.buttonMore} href="/trending">
          See more
        </Link>
        <button className={s.buttonFav}>
          For viewing favorites you need authorize!
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
