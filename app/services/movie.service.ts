import axios, { axiosClassic } from "../api/interceptors";
import { IMovieEditInput } from "../components/Admin/movies/MovieEdit.interface";
import { getMoviesUrl } from "../config/api.config";
import { IMovie } from "../shared/types/movie.types";

export const MovieService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });
  },

  async getMostPopularMovies() {
    const { data: movies } = await axiosClassic.get<IMovie[]>(
      getMoviesUrl("/most-popular")
    );
    return movies;
  },

  async getById(_id: string) {
    return axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`));
  },

  async getByGenres(genreIds: string[]) {
    return axiosClassic.post<IMovie[]>(getMoviesUrl("/by-genres"), {
      genreIds,
    });
  },

  async getByActor(actorId: string) {
    return axiosClassic.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorId}`));
  },

  async getBySlug(slug: string) {
    return axiosClassic.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`));
  },

  async createMovie() {
    return axios.post<string>(getMoviesUrl(`/`));
  },

  async updateMovie(_id: string, data: IMovieEditInput) {
    return axios.put<string>(getMoviesUrl(`/${_id}`), data);
  },

  async deleteMovie(_id: string) {
    return axios.delete<string>(getMoviesUrl(`/${_id}`));
  },
};
