import Admin from "../../app/components/Admin/Admin";
import AdminStatistics from "../../app/components/Admin/statistics/AdminStatistics";
import { NextPageAuth } from "../../app/shared/types/auth.types";
import Meta from "../../app/utils/meta/Meta";

const AdminPage: NextPageAuth = () => {
  return (
    <Meta
      title="Admin stats page"
      description="Admin, this is where we change the stats."
    >
      <Admin heading="Statistics" />
      <AdminStatistics />
    </Meta>
  );
};

AdminPage.isOnlyAdmin = true;

export default AdminPage;
