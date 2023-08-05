import { FC } from "react";
import s from "./AdminTable.module.scss";

const AdminItemHeader: FC<{ headerItems: string[] }> = ({ headerItems }) => {
  return (
    <div className={s.header}>
      {headerItems.map(value => (
        <div className={s.itemValue} key={value}>
          {value}
        </div>
      ))}
      <div className={s.itemValue}>Actions</div>
    </div>
  );
};

export default AdminItemHeader;
