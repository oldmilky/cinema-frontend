import Admin from "../../../../app/components/Admin/Admin";
import MovieEdit from "../../../../app/components/Admin/movies/MovieEdit";
import { NextPageAuth } from "../../../../app/shared/types/auth.types";
import Meta from "../../../../app/utils/meta/Meta";

const MovieEditPage: NextPageAuth = () => {
  return (
    <Meta
      title="Admin movie edit page"
      description="Admin, this is where we change the movie edit."
    >
      <Admin heading="Edit movie" />
      <MovieEdit />
    </Meta>
  );
};

MovieEditPage.isOnlyAdmin = true;

export default MovieEditPage;
