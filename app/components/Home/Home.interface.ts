import { IGalleryItem } from "../Gallery/Gallery.interface";
import { ISlide } from "../Slider/Slider.interface";

export interface IHome {
  slides: ISlide[];
  trendingMovies: IGalleryItem[];
  actors: IGalleryItem[];
}
