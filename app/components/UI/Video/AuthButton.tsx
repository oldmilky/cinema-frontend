import Link from "next/link";
import { FC } from "react";
import { getMovieUrl } from "../../../config/url.config";
import s from "./Video.module.scss";

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
  return (
    <Link href={`/auth?redirect=${getMovieUrl(slug)}`}>
      <button className={s.button}>Sign in</button>
    </Link>
  );
};

export default AuthButton;
