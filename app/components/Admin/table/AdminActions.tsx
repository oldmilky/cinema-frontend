import { useRouter } from "next/router";
import { FC } from "react";
import MaterialIcon from "../../UI/MaterialIcon";
import s from "./AdminTable.module.scss";

interface IAdminActions {
  editUrl: string;
  removeHandler: (id: string) => void;
}

const AdminActions: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
  const { push } = useRouter();

  return (
    <div className={s.adminActions}>
      <button className={s.buttonEdit} onClick={() => push(editUrl)}>
        <MaterialIcon name="MdEdit" />
      </button>
      <button className={s.buttonDelete} onClick={removeHandler}>
        <MaterialIcon name="MdDelete" />
      </button>
    </div>
  );
};

export default AdminActions;
