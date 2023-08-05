import axios, { axiosClassic } from "../api/interceptors";
import { IActorEditInput } from "../components/Admin/actors/ActorEdit.interface";
import { getActorsUrl } from "../config/api.config";
import { IActor } from "../shared/types/movie.types";

export const ActorService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IActor[]>(getActorsUrl(``), {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });
  },

  async getBySlug(slug: string) {
    return axiosClassic.get<IActor>(getActorsUrl(`/by-slug/${slug}`));
  },

  async getById(_id: string) {
    return axios.get<IActorEditInput>(getActorsUrl(`/${_id}`));
  },

  async createActor() {
    return axios.post<string>(getActorsUrl(`/`));
  },

  async updateActor(_id: string, data: IActorEditInput) {
    return axios.put<string>(getActorsUrl(`/${_id}`), data);
  },

  async deleteActor(_id: string) {
    return axios.delete<string>(getActorsUrl(`/${_id}`));
  },
};
