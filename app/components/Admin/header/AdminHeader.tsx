import Image from "next/image";
import { ChangeEvent, FC } from "react";
import searchIcon from "../../../assets/images/search.svg";
import s from "../Admin.module.scss";

interface IAdminHeader {
  onClick?: () => void;
  searchTerm: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AdminHeader: FC<IAdminHeader> = ({
  onClick,
  handleSearch,
  searchTerm,
}) => {
  return (
    <section className={s.adminHeader}>
      <div className={s.search}>
        <Image className={s.searchIcon} src={searchIcon} alt="searchIcon" />
        <input
          className={s.searchInput}
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {onClick && <button className={s.headerButton} onClick={onClick}>Create new</button>}
    </section>
  );
};

export default AdminHeader;
