import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import s from "./AdminNav.module.scss";
import { INavItem } from "./admin-nav.interface";

const AdminNavItem: FC<{ item: INavItem }> = ({ item: { title, link } }) => {
  const { asPath } = useRouter();

  return (
    // <section className={s.adminNavItem}>
      <Link href={link}>
        <button className={asPath === link ? s.navItemActive : s.navItem}>{title}</button>
      </Link>
    // </section>
  );
};

export default AdminNavItem;
