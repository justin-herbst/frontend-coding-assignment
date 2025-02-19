import { SearchDrinkProps, SearchDrinkResults } from "../useSearchDrinks";

let result: SearchDrinkResults = {
  drinks: [],
  total: 0,
  loading: false,
  error: "",
};
const useSearchDrinks = jest.fn((props: SearchDrinkProps) => {
  return result;
});

export default useSearchDrinks;
