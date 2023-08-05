import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logo from "../../assets/images/logo.svg";
import s from "./Navigation.module.scss";
import GenreMenu from "./genres/GenreMenu";
import Menu from "./menu/Menu";
import { firstMenu, userMenu } from "./menu/Menu.data";

const Navigation: FC = () => {
  return (
    <section className={s.navigation}>
      <Link href="/" className={s.logoWrap}>
        <Image className={s.logo} src={logo} alt="logo" />
        <div className={s.logoWrapper}>
          <h1 className={s.logoTitle}>Cinema</h1>
          <h2 className={s.logoSubtitle}>by rodya.kz</h2>
        </div>
      </Link>
      <Menu menu={firstMenu} />
      <GenreMenu />
      <Menu menu={userMenu} />
    </section>
  );
};

export default Navigation;
