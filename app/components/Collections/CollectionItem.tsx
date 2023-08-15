import { FC } from "react";
import s from "./Collections.module.scss";
import { ICollection } from "./Collections.interface";
import Link from "next/link";
import { getGenreUrl } from "../../config/url.config";
import Image from "next/image";

const CollectionsItem: FC<{ collection: ICollection }> = ({ collection }) => {
  return (
    <Link href={getGenreUrl(collection.slug)} className={s.item}>
      <div className={`${s.image} ${collection && s.withText}`}>
        <Image
          src={collection.image}
          alt={collection.title}
          layout="fill"
          draggable={false}
        />
        <div className={s.content}>
          <h1 className={s.titleItem}>{collection.title}</h1>
        </div>
      </div>

      <div className={s.secondImage}>
        <Image
          src={collection.image}
          alt={collection.title}
          layout="fill"
          draggable={false}
        />
      </div>

      <div className={s.thirdImage}>
        <Image
          src={collection.image}
          alt={collection.title}
          layout="fill"
          draggable={false}
        />
      </div>
    </Link>
  );
};

export default CollectionsItem;
