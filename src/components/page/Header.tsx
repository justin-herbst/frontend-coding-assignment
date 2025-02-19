"use client";
import { useTranslations } from "next-intl";
import styles from "./styles/Header.module.css";
import Link from "next/link";
import { SearchBarContainer } from "@/features/search";

const Header = () => {
  const t = useTranslations("Search");
  return (
    <header data-testid="page-header" className={styles.header}>
      <h1 className={styles.title}>
        <Link href="/">{t("barcraft")}</Link>
      </h1>
      <SearchBarContainer />
      <div className={styles.right} />
    </header>
  );
};

export default Header;
