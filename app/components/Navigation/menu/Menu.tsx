import dynamic from "next/dynamic";
import { FC } from "react";
import s from "../Navigation.module.scss";
import { IMenu } from "./Menu.interface";
import MenuItem from "./MenuItem";

const DynamicAuthItems = dynamic(() => import("../auth/AuthItems"), {
  ssr: false,
});

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
  return (
    <div className={s.container}>
      <h2 className={s.menuSubtitle}>{title}</h2>
      {items.map(item => (
        <MenuItem item={item} key={item.link} />
      ))}
      {title === "General" ? <DynamicAuthItems /> : null}
    </div>
  );
};

export default Menu;
