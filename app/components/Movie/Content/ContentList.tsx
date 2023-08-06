import Link from "next/link";
import { FC, Fragment } from "react";
import { IContentList } from "./Content.interface";
import s from "./Content.module.scss";

const ContentList: FC<IContentList> = ({ links, name }) => {
  return (
    <div className={s.list}>
      <p className={s.name}>{name}: </p>
      <p className={s.links}>
        {links.map((link, index) => (
          <Fragment key={index}>
            <Link href={link.link} className={s.link}>
              {link.title}
            </Link>
            {index + 1 !== links.length ? <p className={s.point}>{" "},</p> : ""}
          </Fragment>
        ))}
      </p>
    </div>
  );
};

export default ContentList;
