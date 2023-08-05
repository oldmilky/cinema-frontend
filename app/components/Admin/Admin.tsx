import { FC } from "react";
import AdminNav from "../UI/AdminNavigation/AdminNav";
import { INavItem } from "../UI/AdminNavigation/admin-nav.interface";
import s from "./Admin.module.scss";

const Admin: FC<INavItem> = ({ heading }) => {
  return (
    <section className={s.admin}>
      <AdminNav />
      <h1 className={s.title}>{heading}</h1>
    </section>
  );
};

export default Admin;
