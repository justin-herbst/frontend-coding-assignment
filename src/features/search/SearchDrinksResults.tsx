import { Drink } from "./types";
import DrinkCard from "./DrinkCard";
import styles from "./styles/SearchDrinksResults.module.css";
import { useTranslations } from "next-intl";
import { Loading } from "@/components/ui";
import { PageHeader } from "@/components/page";

type Props = {
  drinks: Drink[];
  loading: boolean;
  error: string;
  total: number;
  query: string;
};

const SearchDrinksResults = ({
  query,
  drinks,
  loading,
  error,
  total,
}: Props) => {
  const t = useTranslations("Search");

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className={styles.headerContainer}>
        {query ? (
          <>
            <PageHeader>{t("search-query", { query })}</PageHeader>
            <div className={styles.resultCount}>
              {t("search-results", { count: total })}
            </div>
          </>
        ) : (
          <PageHeader>{t("all-drinks")}</PageHeader>
        )}
      </div>

      <div role="list" className={styles.drinkList}>
        {drinks.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>
    </>
  );
};

export default SearchDrinksResults;
