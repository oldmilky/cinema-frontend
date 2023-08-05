import { FC } from "react";
import Gallery from "../Gallery/Gallery";
import Slider from "../Slider/Slider";
import { IHome } from "./Home.interface";
import s from "./Home.module.scss";

const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
  return (
    <section className={s.home}>
      <div className={s.wrap}>
        <h1 className={s.title}>Watch movies online</h1>
        {slides.length && <Slider slides={slides} />}
      </div>

      <div className={s.wrap}>
        <h1 className={s.title}>Trending now</h1>
        {trendingMovies.length && <Gallery items={trendingMovies} />}
      </div>

      <div className={s.wrap}>
        <h1 className={s.title}>Best actors</h1>
        {actors.length && <Gallery items={actors} />}
      </div>
    </section>
  );
};

export default Home;
