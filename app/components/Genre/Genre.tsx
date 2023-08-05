import { FC } from "react";
import Custom404 from "../../../pages/404";
import Catalog from "../Catalog/Catalog";
import { IGenrePage } from "./Genre.types";

const Genre: FC<IGenrePage> = ({ genre, movies }) => {
  return genre ? (
    <Catalog
      movies={movies}
      title={genre.name}
      description={genre.description}
    />
  ) : <Custom404 />;
};

export default Genre;
