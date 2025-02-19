"use client";
import { useState } from "react";
import styles from "./styles/SearchBar.module.css";
import { SearchIcon } from "@/components/icons";
import { useTranslations } from "next-intl";

type Props = {
  value: string;
  search: (arg0: string) => void;
};

const SearchBar = ({ value, search }: Props) => {
  const [searchValue, setSearchValue] = useState(value);
  const handleSearch = () => {
    search(searchValue);
  };
  const t = useTranslations("Search");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      search(searchValue);
    }
  };

  return (
    <div className={styles.searchBar}>
      <button className={styles.searchButton} onClick={handleSearch}>
        {t("go")}
      </button>
      <SearchIcon className={styles.searchIcon} />
      <input
        className={styles.searchInput}
        type="text"
        placeholder={t("search-all-drinks")}
        value={searchValue}
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
