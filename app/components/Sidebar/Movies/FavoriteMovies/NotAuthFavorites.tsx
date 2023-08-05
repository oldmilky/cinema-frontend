import { FC } from "react";
import s from "../../Sidebar.module.scss";

const NotAuthFavorites: FC = () => {
  return (
    <button className={s.buttonFav}>
      For viewing favorites you need authorize!
    </button>
  );
};

export default NotAuthFavorites;
