import { FC } from "react";
import SkeletonLoader from "../../UI/Skeleton/Sketelon";
import AdminTableItem from "./AdminItem";
import AdminItemHeader from "./AdminItemHeader";
import s from "./AdminTable.module.scss";
import { ITableItem } from "./admin-table.interface";

interface IAdminTable {
  tableItems: ITableItem[];
  isLoading: boolean;
  headerItems: string[];
  removeHandler: (id: string) => void
}

const AdminTable: FC<IAdminTable> = ({
  tableItems,
  headerItems,
  isLoading,
  removeHandler,
}) => {
  return (
    <section className={s.adminTable}>
      <AdminItemHeader headerItems={headerItems} />

      {isLoading ? (
        <SkeletonLoader count={1} className={s.skeletonLoader} />
      ) : tableItems.length ? (
        tableItems.map(tableItem => (
          <AdminTableItem
            key={tableItem._id}
            tableItem={tableItem}
            removeHandler={removeHandler}
          />
        ))
      ) : (
        <div className={s.notFound}>Elements not found</div>
      )}
    </section>
  );
};

export default AdminTable;
