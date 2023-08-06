import { FC } from "react";
import AuthButton from "./AuthButton";
import s from "./Video.module.scss";

const AuthPlaceholder: FC<{ slug: string }> = ({ slug }) => {
  return (
    <div className={s.placeholder}>
      <div className={s.placeholderTitle}>
        You must be logged in to start watching
      </div>
      <AuthButton slug={slug} />
    </div>
  );
};

export default AuthPlaceholder;
