import { IGalleryItem } from "../../Gallery/Gallery.interface";

export interface IFavoriteItem extends Omit<IGalleryItem, "content"> {
  title: string;
  _id: string;
}
