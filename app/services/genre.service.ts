import axios, { axiosClassic } from "../api/interceptors";
import { IGenreEditInput } from "../components/Admin/genres/GenreEdit.interface";
import { ICollection } from "../components/Collections/Collections.interface";
import { getGenresUrl } from "../config/api.config";
import { IGenre } from "../shared/types/movie.types";

export const GenreService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });
  },

  async getById(_id: string) {
    return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`));
  },

  async getBySlug(slug: string) {
    return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`));
  },

  async getCollections() {
    return axiosClassic.get<ICollection[]>(getGenresUrl(`/collections`));
  },

  async createGenre() {
    return axios.post<string>(getGenresUrl(`/`));
  },

  async updateGenre(_id: string, data: IGenreEditInput) {
    return axios.put<string>(getGenresUrl(`/${_id}`), data);
  },

  async deleteGenre(_id: string) {
    return axios.delete<string>(getGenresUrl(`/${_id}`));
  },
};
