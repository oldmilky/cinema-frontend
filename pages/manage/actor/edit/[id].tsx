import Admin from "../../../../app/components/Admin/Admin";
import ActorEdit from "../../../../app/components/Admin/actors/ActorEdit";
import { NextPageAuth } from "../../../../app/shared/types/auth.types";
import Meta from "../../../../app/utils/meta/Meta";

const ActorEditPage: NextPageAuth = () => {
  return (
    <Meta
      title="Admin actor edit page"
      description="Admin, this is where we change the actor edit."
    >
      <Admin heading="Edit actor" />
      <ActorEdit />
    </Meta>
  );
};

ActorEditPage.isOnlyAdmin = true;

export default ActorEditPage;
