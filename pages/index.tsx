import { GetStaticProps, NextPage } from "next";
import { errorCatch } from "../app/api/api.helpers";
import { IGalleryItem } from "../app/components/Gallery/Gallery.interface";
import Home from "../app/components/Home/Home";
import { IHome } from "../app/components/Home/Home.interface";
import { ISlide } from "../app/components/Slider/Slider.interface";
import { getActorUrl, getMovieUrl } from "../app/config/url.config";
import { ActorService } from "../app/services/actor.service";
import { MovieService } from "../app/services/movie.service";
import Meta from "../app/utils/meta/Meta";
import { getGenresList } from "../app/utils/movie/getGenresList";

const HomePage: NextPage<IHome> = ({ slides, actors, trendingMovies }) => {
  return (
    <Meta
      title="Watch movies online"
      description="Watch MovieApp movies and TV shows online or stream right to your browser"
    >
      <Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
    </Meta>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getAll();
    const { data: dataActors } = await ActorService.getAll();
    const dataTrendingMovies = await MovieService.getMostPopularMovies();

    const slides: ISlide[] = movies.slice(0, 5).map(m => ({
      _id: m._id,
      link: getMovieUrl(m.slug),
      subTitle: getGenresList(m.genres),
      title: m.title,
      bigPoster: m.bigPoster,
    }));

    const actors: IGalleryItem[] = dataActors.slice(0, 7).map(a => ({
      name: a.name,
      posterPath: a.photo,
      link: getActorUrl(a.slug),
      content: {
        title: a.name,
        subTitle: `+${a.countMovies} movies`,
      },
    }));

    const trendingMovies: IGalleryItem[] = dataTrendingMovies
      .slice(0, 7)
      .map(m => ({
        name: m.title,
        posterPath: m.poster,
        link: getMovieUrl(m.slug),
      }));

    return {
      props: {
        slides,
        actors,
        trendingMovies,
      } as IHome,
    };
  } catch (error) {
    console.log(errorCatch(error));

    return {
      props: {
        slides: [],
        actors: [],
        trendingMovies: [],
      } as IHome,
    };
  }
};

export default HomePage;
