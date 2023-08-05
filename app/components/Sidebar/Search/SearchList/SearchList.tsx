import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { getMovieUrl } from "../../../../config/url.config";
import { IMovie } from "../../../../shared/types/movie.types";
import MaterialIcon from "../../../UI/MaterialIcon";
import s from "../../Sidebar.module.scss";

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <div className={s.list}>
      {movies.length ? (
        movies.map(movie => (
          <Link
            href={getMovieUrl(movie.slug)}
            key={movie._id}
            className={s.listWrap}
          >
            <Image
              className={s.listImage}
              src={movie.poster}
              alt={movie.title}
              width={60}
              height={60}
            />
            <p className={s.listTitle}>{movie.title}</p>
          </Link>
        ))
      ) : (
        <div className={s.notfoundWrap}>
          <MaterialIcon name="MdErrorOutline" />
          <p className={s.notfound}>Movies not found</p>
        </div>
      )}
    </div>
  );
};

export default SearchList;
