import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IGalleryItemProps } from "./Gallery.interface";
import s from "./Gallery.module.scss";

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
  return (
    <Link href={item.link}>
      <div
        className={`${s.galleryItem} 
        
        ${item.content && s.withText} `}
      >
        <Image
          alt={item.name}
          src={item.posterPath}
          // layout="fill"
          draggable={false}
          priority
          width={160}
          height={250}
        />
        {item.content && (
          <div className={s.content}>
            <h1 className={s.title}>{item.content.title}</h1>
            <h2 className={s.subtitle}>{item.content.subTitle}</h2>
          </div>
        )}
      </div>
    </Link>
  );
};

export default GalleryItem;
