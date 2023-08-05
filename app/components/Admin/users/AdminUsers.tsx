import { FC } from "react";
import s from "../Admin.module.scss";
import AdminHeader from "../header/AdminHeader";
import AdminTable from "../table/AdminTable";
import { useUsers } from "./useUsers";

const AdminUsers: FC = () => {
  const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers();

  return (
    <section className={s.adminUsers}>
      <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
      <AdminTable
        tableItems={data || []}
        headerItems={['Email', 'Date register']}
        isLoading={isLoading}
        removeHandler={deleteAsync}
      />
    </section>
  );
};

export default AdminUsers;
