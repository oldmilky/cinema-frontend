import { FC, MouseEvent } from "react";
import { useActions } from "../../../hooks/useActions";
import MaterialIcon from "../../UI/MaterialIcon";
import s from "../Navigation.module.scss";

const LogoutButton: FC = () => {
  const { logout } = useActions();

  const handleLogout = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className={s.menuWrap} onClick={handleLogout}>
      <MaterialIcon name="MdLogout" />
      <h1 className={s.menuTitle}>Logout</h1>
    </div>
  );
};

export default LogoutButton;
