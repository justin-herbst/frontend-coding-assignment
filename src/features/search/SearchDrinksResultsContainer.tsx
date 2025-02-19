"use client";
import DrinkPaging from "./DrinkPaging";
import { useSearchDrinksContext } from "./SearchDrinksContext";
import SearchDrinksResults from "./SearchDrinksResults";

const SearchDrinksResultsContainer = () => {
  const { query, total, drinks, page, setPage, limit, loading, error } =
    useSearchDrinksContext();
  const handleNextPageClick = () => {
    setPage(page + 1);
  };
  const handlePrevPageClick = () => {
    setPage(page - 1);
  };

  const hasNextPage = total > page * limit;
  const hasPrevPage = page > 1;

  return (
    <>
      <SearchDrinksResults
        query={query}
        drinks={drinks}
        loading={loading}
        error={error}
        total={total}
      />
      <DrinkPaging
        onNextPageClick={handleNextPageClick}
        onPrevPageClick={handlePrevPageClick}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPrevPage}
      />
    </>
  );
};

export default SearchDrinksResultsContainer;
