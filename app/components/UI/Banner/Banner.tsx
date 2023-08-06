import Image from "next/image";
import { FC } from "react";
import s from "./Banner.module.scss";

export interface IBanner {
  image: string;
  Detail?: FC | null;
}

const Banner: FC<IBanner> = ({ image, Detail }) => {
  return (
    <div className={s.banner}>
      <Image
        src={image}
        draggable={false}
        // layout="fill"
        width={1120}
        height={400}
        className={s.image}
        unoptimized
        priority
        alt="Banner image"
      />
      { Detail && <Detail />}
    </div>
  );
};

export default Banner;
