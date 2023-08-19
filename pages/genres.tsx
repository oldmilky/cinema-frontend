import { GetStaticProps, NextPage } from "next";
import Meta from "../app/utils/meta/Meta";
import { ICollection } from "../app/components/Collections/Collections.interface";
import { GenreService } from "../app/services/genre.service";
import Collections from "../app/components/Collections/Collections";
import Custom404 from "./404";

const GenresPage: NextPage<{ collections: ICollection[] }> = ({
  collections,
}) => {
  return (
    <Meta
      title="Genres movies here"
      description="Watch MovieApp movies and TV shows online or stream right to your browser"
    >
      {collections ? (
        <Collections collections={collections || []} />
      ) : (
        <Custom404 />
      )}
    </Meta>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: collections } = await GenreService.getCollections();

    return {
      props: {
        collections,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default GenresPage;
