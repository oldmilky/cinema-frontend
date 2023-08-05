import { FC } from "react";
import Catalog from "../Catalog/Catalog";
import { IActorPage } from "./Actor.types";

const Actor: FC<IActorPage> = ({ movies, actor }) => {
  return <Catalog movies={movies} title={actor.name} />;
};

export default Actor;
