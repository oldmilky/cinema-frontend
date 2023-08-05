import { FC } from "react";
import s from "./AdminNav.module.scss";
import AdminNavItem from "./AdminNavItem";
import { navItems } from "./admin-nav.data";

const AdminNav: FC = () => {
  return (
    <nav className={s.nav}>
      {navItems.map(item => (
        <AdminNavItem key={item.link} item={item} />
      ))}
    </nav>
  );
};

export default AdminNav;
