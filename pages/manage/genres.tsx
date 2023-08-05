import Admin from "../../app/components/Admin/Admin";
import AdminGenres from "../../app/components/Admin/genres/AdminGenres";
import { NextPageAuth } from "../../app/shared/types/auth.types";
import Meta from "../../app/utils/meta/Meta";

const GenresPage: NextPageAuth = () => {
  return (
    <Meta
      title="Admin genres page"
      description="Admin, this is where we change the genres."
    >
      <Admin heading="Genres" />
      <AdminGenres />
    </Meta>
  );
};

GenresPage.isOnlyAdmin = true;

export default GenresPage;
