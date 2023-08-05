import Admin from "../../app/components/Admin/Admin";
import AdminUsers from "../../app/components/Admin/users/AdminUsers";
import { NextPageAuth } from "../../app/shared/types/auth.types";
import Meta from "../../app/utils/meta/Meta";

const UsersPage: NextPageAuth = () => {
  return (
    <Meta
      title="Admin user page"
      description="Admin, this is where we change the users."
    >
      <Admin heading="Users" />
      <AdminUsers />
    </Meta>
  );
};

UsersPage.isOnlyAdmin = true;

export default UsersPage;
