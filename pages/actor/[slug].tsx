import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Actor from "../../app/components/Actor/Actor";
import { IActorPage } from "../../app/components/Actor/Actor.types";
import { ActorService } from "../../app/services/actor.service";
import { GenreService } from "../../app/services/genre.service";
import { MovieService } from "../../app/services/movie.service";
import Meta from "../../app/utils/meta/Meta";
import Custom404 from "../404";

const ActorPage: NextPage<IActorPage> = ({ actor, movies }) => {
  return (
    <Meta
      title="Genre movies here"
      description="Watch Genre movies and TV shows online or stream right to your browser"
    >
      {actor ? <Actor actor={actor} movies={movies} /> : <Custom404 />}
    </Meta>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: genres } = await GenreService.getAll();
    const paths = genres.map(a => ({
      params: { slug: a.slug },
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
    const { data: actor } = await ActorService.getBySlug(String(params?.slug));
    const { data: movies } = await MovieService.getByActor(actor._id);

    return {
      props: { movies, actor },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default ActorPage;
