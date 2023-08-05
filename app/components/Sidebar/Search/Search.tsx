"use client"

import Image from "next/image";
import { FC } from "react";
import searchIcon from "../../../assets/images/search.svg";
import s from "../Sidebar.module.scss";
import SearchList from "./SearchList/SearchList";
import { useSearch } from "./useSearch";

const Search: FC = () => {
  const { isSuccess, data, handleSearch, searchTerm } = useSearch();

  return (
    <div className={s.search}>
      <Image className={s.searchIcon} src={searchIcon} alt="searchIcon" />
      <input
        className={s.searchInput}
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      {isSuccess && <SearchList movies={data || []} />}
    </div>
  );
};

export default Search;
