import { FC } from "react";
import s from "../Admin.module.scss";
import AdminHeader from "../header/AdminHeader";
import AdminTable from "../table/AdminTable";
import { useMovies } from "./useMovies";

const AdminMovies: FC = () => {
  const { handleSearch, isLoading, searchTerm, data, deleteAsync, createAsync } = useMovies();

  return (
    <section className={s.adminUsers}>
      <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync} />
      <AdminTable
        tableItems={data || []}
        headerItems={['Title', 'Genres', 'Rating']}
        isLoading={isLoading}
        removeHandler={deleteAsync}
      />
    </section>
  );
};

export default AdminMovies;
