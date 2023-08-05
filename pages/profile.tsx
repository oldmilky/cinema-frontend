import { NextPageAuth } from "../app/shared/types/auth.types";
import Meta from "../app/utils/meta/Meta";

const ProfilePage: NextPageAuth = () => {
  return (
    <Meta
      title="Profile page"
      description="Here you can change your profile"
    >
      <h1>Profile Page</h1>
    </Meta>
  );
};

ProfilePage.isOnlyUser = true;

export default ProfilePage;
