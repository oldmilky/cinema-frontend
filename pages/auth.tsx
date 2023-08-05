import { NextPage } from "next";
import Auth from "../app/components/Auth/Auth";
import Meta from "../app/utils/meta/Meta";

const AuthPage: NextPage = () => {
  return (
    <Meta title="Auth">
      <Auth />
    </Meta>
  );
};
export default AuthPage;