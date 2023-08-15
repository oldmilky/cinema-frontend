import { FC } from "react";
import { getMovieUrl } from "../../config/url.config";
import { ICatalog } from "./Catalog.interface";
import s from "./Catalog.module.scss";
import CatalogItem from "./CatalogItem";

const Catalog: FC<ICatalog> = ({ movies, title, description }) => {
  return (
    <section className={s.container}>
      <h1 className={s.title}>{title}</h1>
      {description && <p className={s.description}>{description}</p>}
      <div className={s.catalog}>
        {movies.map((movie) => (
          <CatalogItem
            key={movie._id}
            item={{
              name: movie.title,
              link: getMovieUrl(movie.slug),
              posterPath: movie.bigPoster,
              content: {
                title: movie.title,
              },
            }}
            variant="vertical"
          />
        ))}
      </div>
    </section>
  );
};

export default Catalog;
