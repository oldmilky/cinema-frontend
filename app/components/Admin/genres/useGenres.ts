import { useRouter } from "next/router";
import { ChangeEvent, useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { toastr } from "react-redux-toastr";
import { getAdminUrl } from "../../../config/url.config";
import { useDebounce } from "../../../hooks/useDebounce";
import { GenreService } from "../../../services/genre.service";
import { toastError } from "../../../utils/toast-error";
import { ITableItem } from "../table/admin-table.interface";

export const useGenres = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const { push } = useRouter();

  const queryData = useQuery(
    ["genre list", debouncedSearch],
    () => GenreService.getAll(debouncedSearch),
    {
      select: ({ data }) =>
        data.map(
          (genre): ITableItem => ({
            _id: genre._id,
            editUrl: getAdminUrl(`genre/edit/${genre._id}`),
            items: [genre.name, genre.slug],
          })
        ),
      onError: error => {
        toastError(error, "genre list");
      },
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const { mutateAsync: createAsync } = useMutation(
    ["create genre"],
    () => GenreService.createGenre(),
    {
      onError: error => {
        toastError(error, "Create genre");
      },
      onSuccess: ({ data: _id }) => {
        toastr.success("Create genre", "create was successful");
        push(getAdminUrl(`genre/edit/${_id}`));
      },
    }
  );

  const { mutateAsync: deleteAsync } = useMutation(
    ["delete genre"],
    (genreId: string) => GenreService.deleteGenre(genreId),
    {
      onError: error => {
        toastError(error, "Delete genre");
      },
      onSuccess: () => {
        toastr.success("Delete genre", "delete was successful");
        queryData.refetch();
      },
    }
  );

  return useMemo(
    () => ({
      handleSearch,
      ...queryData,
      searchTerm,
      createAsync,
      deleteAsync,
    }),
    [deleteAsync, queryData, searchTerm, createAsync]
  );
};
