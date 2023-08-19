import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { IGalleryItem } from "../../app/components/Gallery/Gallery.interface";
import Movie from "../../app/components/Movie/Movie";
import { getMovieUrl } from "../../app/config/url.config";
import { MovieService } from "../../app/services/movie.service";
import { IMovie } from "../../app/shared/types/movie.types";
import Meta from "../../app/utils/meta/Meta";
import Custom404 from "../404";

export interface IMoviePage {
  movie: IMovie;
  similarMovies: IGalleryItem[];
}

const MoviePage: NextPage<IMoviePage> = ({ movie, similarMovies }) => {
  return (
    <Meta
      title="Genre movies here"
      description="Watch Genre movies and TV shows online or stream right to your browser"
    >
      {movie ? (
        <Movie similarMovies={similarMovies || []} movie={movie} />
      ) : (
        <Custom404 />
      )}
    </Meta>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: movies } = await MovieService.getAll();
    const paths = movies.map(m => ({
      params: { slug: m.slug },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (e) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data: movie } = await MovieService.getBySlug(String(params?.slug));
    const { data: dataSimilarMovies } = await MovieService.getByGenres(
      movie.genres.map(g => g._id)
    );
    const similarMovies: IGalleryItem[] = dataSimilarMovies
      .filter(m => m._id !== movie._id)
      .map(m => ({
        name: m.title,
        posterPath: m.poster,
        link: getMovieUrl(m.slug),
      }));

    return {
      props: { similarMovies, movie },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default MoviePage;
