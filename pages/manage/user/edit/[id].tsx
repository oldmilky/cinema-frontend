import Admin from "../../../../app/components/Admin/Admin";
import UserEdit from "../../../../app/components/Admin/users/userEdit";
import { NextPageAuth } from "../../../../app/shared/types/auth.types";
import Meta from "../../../../app/utils/meta/Meta";

const UserEditPage: NextPageAuth = () => {
  return (
    <Meta
      title="Admin user edit page"
      description="Admin, this is where we change the user edit."
    >
      <Admin heading="Edit user" />
      <UserEdit />
    </Meta>
  );
};

UserEditPage.isOnlyAdmin = true;

export default UserEditPage;
