"use client";

import { FC, useEffect } from "react";
import MaterialIcon from "../UI/MaterialIcon";
import s from "./Notifications.module.scss";

interface ISuccessProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  subtitle: string;
}

const Success: FC<ISuccessProps> = ({ title, subtitle, show, setShow }) => {
  useEffect(() => {
    if (show) {
      const timeoutId = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [setShow, show]);

  return (
    <div className={s.alert}>
      <div className={s.containerSuccess}>
        <div className={s.wrapper}>
          <MaterialIcon name="MdDone" />
          <div className={s.wrap}>
            <h1 className={s.title}>{title}</h1>
            <h2 className={s.subtitle}>{subtitle}</h2>
          </div>
        </div>
        <div className={s.wrapClose} onClick={() => setShow(false)}>
          <MaterialIcon name="MdClose" />
        </div>
      </div>
    </div>
  );
};

export default Success;
