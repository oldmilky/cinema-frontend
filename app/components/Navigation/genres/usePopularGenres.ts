"use client";

import { useQuery } from "react-query";
import { getGenreUrl } from "../../../config/url.config";
import { GenreService } from "../../../services/genre.service";
import { IMenuItem } from "./../menu/Menu.interface";

export const usePopularGenres = () => {
  const queryData = useQuery(
    "popular genres menu",
    () => GenreService.getAll(),
    {
      select: ({ data }) =>
        data
          .filter(genre => genre.icon)
          .map(
            (genre): IMenuItem => ({
              icon: genre.icon,
              link: getGenreUrl(genre.slug),
              title: genre.name,
            })
          )
          .splice(0, 4),
      onError(error) {},
    }
  );

  return queryData;
};
