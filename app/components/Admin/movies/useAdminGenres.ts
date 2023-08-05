import { useQuery } from "react-query";
import { GenreService } from "../../../services/genre.service";
import { toastError } from "../../../utils/toast-error";
import { IOption } from "../../UI/Select/Select.interface";

export const useAdminGenres = () => {
  const queryData = useQuery("list of genre", () => GenreService.getAll(), {
    select: ({ data }) =>
      data.map(
        (genre): IOption => ({
          label: genre.name,
          value: genre._id,
        })
      ),
    onError(error) {
      toastError(error, "genre list");
    },
  });

  return queryData;
};
