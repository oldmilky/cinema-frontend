import { GetStaticProps, NextPage } from "next";
import Catalog from "../app/components/Catalog/Catalog";
import { MovieService } from "../app/services/movie.service";
import { IMovie } from "../app/shared/types/movie.types";
import Meta from "../app/utils/meta/Meta";

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <Meta
      title="Trending movies here"
      description="Watch MovieApp movies and TV shows online or stream right to your browser"
    >
      <Catalog movies={movies || []} title="Trending Movies" />
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
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default TrendingPage;
