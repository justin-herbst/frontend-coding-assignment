import { render, screen } from "@testing-library/react";
import DrinkDetailsContainer from "./DrinkDetailsContainer";
import useDrinkDetails from "./hooks/useDrinkDetails";
import "@testing-library/jest-dom";

jest.mock("./hooks/useDrinkDetails");
jest.mock("./DrinkDetails", () => ({ drink, loading, error }: any) => (
  <div>
    {loading && <div data-testid="loading">Loading...</div>}
    {error && <div data-testid="error">{error}</div>}
    {drink && <div data-testid="drink">{drink.name}</div>}
  </div>
));

describe("DrinkDetailsContainer", () => {
  const mockUseDrinkDetails = useDrinkDetails as jest.Mock;

  it("renders loading state", () => {
    mockUseDrinkDetails.mockReturnValue({
      drink: null,
      loading: true,
      error: null,
    });
    render(<DrinkDetailsContainer id={1} />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("renders error state", () => {
    mockUseDrinkDetails.mockReturnValue({
      drink: null,
      loading: false,
      error: "Error occurred",
    });
    render(<DrinkDetailsContainer id={1} />);
    expect(screen.getByTestId("error")).toBeInTheDocument();
    expect(screen.getByText("Error occurred")).toBeInTheDocument();
  });

  it("renders drink details", () => {
    mockUseDrinkDetails.mockReturnValue({
      drink: { name: "Mojito" },
      loading: false,
      error: null,
    });
    render(<DrinkDetailsContainer id={1} />);
    expect(screen.getByTestId("drink")).toBeInTheDocument();
    expect(screen.getByText("Mojito")).toBeInTheDocument();
  });
});
