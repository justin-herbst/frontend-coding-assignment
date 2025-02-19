import SearchBar from "./SearchBar";
import { useSearchDrinksContext } from "./SearchDrinksContext";

const SearchBarContainer = () => {
  const { query, setQuery } = useSearchDrinksContext();
  return <SearchBar value={query} search={setQuery} />;
};

export default SearchBarContainer;
