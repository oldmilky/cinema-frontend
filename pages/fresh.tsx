import { GetStaticProps, NextPage } from "next";
import Catalog from "../app/components/Catalog/Catalog";
import { MovieService } from "../app/services/movie.service";
import { IMovie } from "../app/shared/types/movie.types";
import Meta from "../app/utils/meta/Meta";

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <Meta
      title="Fresh movies here"
      description="Watch MovieApp movies and TV shows online or stream right to your browser"
    >
      <Catalog movies={movies || []} title="Fresh Movies" />
    </Meta>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getAll();

    return {
      props: {
        movies,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default FreshPage;
