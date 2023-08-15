import { GetStaticProps, NextPage } from "next";
import Catalog from "../app/components/Catalog/Catalog";
import { MovieService } from "../app/services/movie.service";
import { IMovie } from "../app/shared/types/movie.types";
import Meta from "../app/utils/meta/Meta";
import { useQuery } from "react-query";

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
  const { data: popularMovies } = useQuery("Popular movies", () =>
    MovieService.getMostPopularMovies()
  );

  return (
    <Meta
      title="Trending movies here"
      description="Watch MovieApp movies and TV shows online or stream right to your browser"
    >
      <Catalog
        movies={popularMovies?.slice(0, 6) || []}
        title="Trending Movies"
      />
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
