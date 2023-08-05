import Admin from "../../app/components/Admin/Admin";
import AdminMovies from "../../app/components/Admin/movies/AdminMovies";
import { NextPageAuth } from "../../app/shared/types/auth.types";
import Meta from "../../app/utils/meta/Meta";

const MoviesPage: NextPageAuth = () => {
  return (
    <Meta
      title="Admin movies page"
      description="Admin, this is where we change the movies."
    >
      <Admin heading="Movies" />
      <AdminMovies />
    </Meta>
  );
};

MoviesPage.isOnlyAdmin = true;

export default MoviesPage;
