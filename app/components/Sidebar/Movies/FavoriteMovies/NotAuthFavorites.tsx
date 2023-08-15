import Link from "next/link";
import { FC } from "react";
import s from "../../Sidebar.module.scss";

const NotAuthFavorites: FC = () => {
  return (
    <Link className={s.buttonFav} href="/auth">
      For viewing favorites you need authorize!
    </Link>
  );
};

export default NotAuthFavorites;
