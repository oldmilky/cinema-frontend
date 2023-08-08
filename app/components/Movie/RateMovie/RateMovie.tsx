import { FC } from "react";
import StarRatingComponent from "react-star-rating-component";
import { useAuth } from "../../../hooks/useAuth";
import AuthButton from "../../UI/Video/AuthButton";
import s from "./RateMovie.module.scss";
import { useRateMovie } from "./useRateMovie";

interface IRateMovie {
  id: string;
  slug: string;
}

const RateMovie: FC<IRateMovie> = ({ id, slug }) => {
  const { user } = useAuth();

  const { handleClick, isSended, rating } = useRateMovie(id);

  return (
    <div className={s.rating}>
      <h2 className={s.title}>How do you like the movie?</h2>
      <p className={s.text}>Ratings improve recommendations</p>

      {user ? (
        <>
          {isSended ? (
            <h3 className={s.thanks}>Thanks for rating!</h3>
          ) : (
            <StarRatingComponent
              name="star-rating"
              value={rating}
              onStarClick={handleClick}
              emptyStarColor="#4f4f4f"
            />
          )}
        </>
      ) : (
        <AuthButton slug={slug} />
      )}
    </div>
  );
};

export default RateMovie;
