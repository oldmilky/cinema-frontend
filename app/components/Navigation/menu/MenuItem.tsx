import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import MaterialIcon from "../../UI/MaterialIcon";
import s from "../Navigation.module.scss";
import { IMenuItem } from "./Menu.interface";

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  const { asPath } = useRouter();

  return (
    <Link href={item.link}>
      <div
        className={asPath === item.link ? s.menuWrapActive : s.menuWrap}
        key={item.link}
      >
        <MaterialIcon name={item.icon} />
        <h1 className={asPath === item.link ? s.menuTitleActive : s.menuTitle}>
          {item.title}
        </h1>
      </div>
    </Link>
  );
};

export default MenuItem;
