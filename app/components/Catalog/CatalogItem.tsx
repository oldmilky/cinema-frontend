import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IGalleryItemProps } from "../Gallery/Gallery.interface";
import s from "./Catalog.module.scss";

const CatalogItem: FC<IGalleryItemProps> = ({ item }) => {
  return (
    <Link href={item.link}>
      <div
        className={`${s.catalogItem} 
        
        ${item.content && s.withText} `}
      >
        <Image
          alt={item.name}
          src={item.posterPath}
          layout="fill"
          draggable={false}
          priority
        />
        {item.content && (
          <div className={s.content}>
            <h1 className={s.titleItem}>{item.content.title}</h1>
            <h2 className={s.subtitleItem}>{item.content.subTitle}</h2>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CatalogItem;
