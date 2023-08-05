import { IMovie } from "../../shared/types/movie.types";

export interface ISlide extends Pick<IMovie, "_id" | "bigPoster" | "title"> {
  subTitle: string;
  link: string;
}

// export interface ISlide {
// 	_id: string
// 	bigPoster: string
// 	title: string
// 	subTitle: string
// 	link: string
// }
