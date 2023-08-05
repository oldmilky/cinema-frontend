import { getAdminHomeUrl, getAdminUrl } from "../../../config/url.config";
import { INavItem } from "./admin-nav.interface";

export const navItems: INavItem[] = [
  {
    title: "Statistics",
    link: getAdminHomeUrl(),
    heading: "Statistics",
  },
  {
    title: "Users",
    link: getAdminUrl("users"),
    heading: "Users",
  },
  {
    title: "Movies",
    link: getAdminUrl("movies"),
    heading: "Movies",
  },
  {
    title: "Actors",
    link: getAdminUrl("actors"),
    heading: "Actors",
  },
  {
    title: "Genres",
    link: getAdminUrl("genres"),
    heading: "Genres",
  },
];
