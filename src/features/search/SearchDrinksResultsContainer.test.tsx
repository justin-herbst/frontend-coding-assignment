import { render, screen, fireEvent } from "@testing-library/react";
import SearchDrinksResultsContainer from "./SearchDrinksResultsContainer";
import { useSearchDrinksContext } from "./SearchDrinksContext";
import "@testing-library/jest-dom";

jest.mock("./SearchDrinksContext", () => ({
  useSearchDrinksContext: jest.fn(),
}));

jest.mock("./SearchDrinksResults", () => () => (
  <div data-testid="search-drinks-results" />
));
jest.mock("./DrinkPaging", () => (props: any) => (
  <div>
    <button
      data-testid="prev-page"
      onClick={props.onPrevPageClick}
      disabled={!props.hasPreviousPage}
    >
      Prev
    </button>
    <button
      data-testid="next-page"
      onClick={props.onNextPageClick}
      disabled={!props.hasNextPage}
    >
      Next
    </button>
  </div>
));

describe("SearchDrinksResultsContainer", () => {
  const mockContextValue = {
    query: "test",
    total: 20,
    drinks: [],
    page: 1,
    setPage: jest.fn(),
    limit: 10,
    loading: false,
    error: "",
  };

  beforeEach(() => {
    (useSearchDrinksContext as jest.Mock).mockReturnValue(mockContextValue);
  });

  it("renders SearchDrinksResults and DrinkPaging components", () => {
    render(<SearchDrinksResultsContainer />);
    expect(screen.getByTestId("search-drinks-results")).not.toBeNull();
    expect(screen.getByTestId("prev-page")).not.toBeNull();
    expect(screen.getByTestId("next-page")).not.toBeNull();
  });

  it("handles next page click", () => {
    render(<SearchDrinksResultsContainer />);
    fireEvent.click(screen.getByTestId("next-page"));
    expect(mockContextValue.setPage).toHaveBeenCalledWith(2);
  });

  it("handles prev page click", () => {
    (useSearchDrinksContext as jest.Mock).mockReturnValue({
      ...mockContextValue,
      page: 2,
    });
    render(<SearchDrinksResultsContainer />);
    fireEvent.click(screen.getByTestId("prev-page"));
    expect(mockContextValue.setPage).toHaveBeenCalledWith(1);
  });

  it("disables prev button on first page", () => {
    render(<SearchDrinksResultsContainer />);
    expect(screen.getByTestId("prev-page")).toBeDisabled();
  });

  it("disables next button on last page", () => {
    (useSearchDrinksContext as jest.Mock).mockReturnValue({
      ...mockContextValue,
      page: 2,
      total: 20,
    });
    render(<SearchDrinksResultsContainer />);
    expect(screen.getByTestId("next-page")).toHaveAttribute("disabled");
  });
});
