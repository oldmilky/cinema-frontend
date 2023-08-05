import { FC } from "react";
import AdminActions from "./AdminActions";
import s from "./AdminTable.module.scss";
import { IAdminTableItem } from "./admin-table.interface";

const AdminTableItem: FC<IAdminTableItem> = ({ tableItem, removeHandler }) => {
  return (
    <div className={s.item}>
      {tableItem.items.map(value => (
        <div className={s.itemValue} key={value}>
          {value}
        </div>
      ))}
      <AdminActions editUrl={tableItem.editUrl} removeHandler={removeHandler} />
    </div>
  );
};

export default AdminTableItem;
