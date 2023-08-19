import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Genre from "../../app/components/Genre/Genre";
import { IGenrePage } from "../../app/components/Genre/Genre.types";
import { GenreService } from "../../app/services/genre.service";
import { MovieService } from "../../app/services/movie.service";
import Meta from "../../app/utils/meta/Meta";

const GenrePage: NextPage<IGenrePage> = ({ movies, genre }) => {
  return (
    <Meta
      title="Genre movies here"
      description="Watch Genre movies and TV shows online or stream right to your browser"
    >
      <Genre genre={genre} movies={movies || []} />
    </Meta>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: genres } = await GenreService.getAll();
    const paths = genres.map(g => ({
      params: { slug: g.slug },
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
    const { data: genre } = await GenreService.getBySlug(String(params?.slug));
    const { data: movies } = await MovieService.getByGenres([genre._id]);

    return {
      props: { movies, genre },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default GenrePage;
