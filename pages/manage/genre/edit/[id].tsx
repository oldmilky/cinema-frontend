import Admin from "../../../../app/components/Admin/Admin";
import GenreEdit from "../../../../app/components/Admin/genres/GenreEdit";
import { NextPageAuth } from "../../../../app/shared/types/auth.types";
import Meta from "../../../../app/utils/meta/Meta";

const GenreEditPage: NextPageAuth = () => {
  return (
    <Meta
      title="Admin genre edit page"
      description="Admin, this is where we change the genre edit."
    >
      <Admin heading="Edit genre" />
      <GenreEdit />
    </Meta>
  );
};

GenreEditPage.isOnlyAdmin = true;

export default GenreEditPage;
