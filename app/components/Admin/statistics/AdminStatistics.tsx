import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useQuery } from "react-query";
import { getMovieUrl } from "../../../config/url.config";
import { AdminService } from "../../../services/admin.service";
import { MovieService } from "../../../services/movie.service";
import { IMovie } from "../../../shared/types/movie.types";
import SkeletonLoader from "../../UI/Skeleton/Sketelon";
import s from "../Admin.module.scss";

const AdminStatistics: FC = () => {
  const { isLoading, data: response } = useQuery("Count users", () =>
    AdminService.getCountUsers()
  );

  const { data: movie } = useQuery(
    "Most popular movie in admin",
    () => MovieService.getMostPopularMovies(),
    {
      select: (data): IMovie => data[0],
    }
  );

  return (
    <section className={s.statistics}>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className={s.statistic}>
          <h1 className={s.number}>{response?.data}</h1>
          <h2 className={s.subtitle}>users</h2>
        </div>
      )}
      {isLoading ? (
        <SkeletonLoader className={s.skeletonLoader} />
      ) : (
        <div className={s.statistic}>
          <h1 className={s.titleMovie}>The most popular movie</h1>
          <h2 className={s.subtitle}>Opened {movie?.countOpened} times</h2>
          <Link href={getMovieUrl(movie?.slug)}>
            <Image
              width={285}
              height={176}
              src={movie?.poster}
              alt={movie?.title}
              className={s.image}
              unoptimized
            />
          </Link>
        </div>
      )}
    </section>
  );
};

export default AdminStatistics;
