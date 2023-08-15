import { FC } from "react";
import s from "./Collections.module.scss";
import { ICollection } from "./Collections.interface";
import CollectionsItem from "./CollectionItem";

const Collections: FC<{ collections: ICollection[] }> = ({ collections }) => {
  return (
    <div className={s.collections}>
      <h1 className={s.title}>Discovery</h1>
      <h2 className={s.subtitle}>
        In this section you will find all genres on our site
      </h2>
      <div className={s.container}>
        {collections.map((c) => (
          <CollectionsItem key={c._id} collection={c} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
