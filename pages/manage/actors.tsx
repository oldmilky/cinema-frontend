import Admin from "../../app/components/Admin/Admin";
import AdminActors from "../../app/components/Admin/actors/AdminActors";
import { NextPageAuth } from "../../app/shared/types/auth.types";
import Meta from "../../app/utils/meta/Meta";

const ActorsPage: NextPageAuth = () => {
  return (
    <Meta
      title="Admin actors page"
      description="Admin, this is where we change the actors."
    >
      <Admin heading="Actors" />
      <AdminActors />
    </Meta>
  );
};

ActorsPage.isOnlyAdmin = true;

export default ActorsPage;
