import { render, screen } from "@testing-library/react";
import SearchDrinksResults from "./SearchDrinksResults";
import "@testing-library/jest-dom";

jest.mock("next-intl");

jest.mock("@/components/ui", () => ({
  Loading: () => <div data-testid="loading" />,
}));

jest.mock("@/components/page", () => ({
  PageHeader: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="page-header">{children}</div>
  ),
}));

jest.mock("./DrinkCard", () => ({ drink }: { drink: any }) => (
  <div data-testid="drink-card">{drink.name}</div>
));

describe("SearchDrinksResults", () => {
  it("renders loading state", () => {
    render(
      <SearchDrinksResults
        query=""
        drinks={[]}
        loading={true}
        error=""
        total={0}
      />
    );
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("renders error state", () => {
    render(
      <SearchDrinksResults
        query=""
        drinks={[]}
        loading={false}
        error="Error occurred"
        total={0}
      />
    );
    expect(screen.getByText("Error occurred")).toBeInTheDocument();
  });

  it("renders search results with query", () => {
    render(
      <SearchDrinksResults
        query="Mojito"
        drinks={[
          {
            id: 1,
            name: "Mojito",
            category: "Cocktail",
            image: "http:/example.com/image.jpg",
          },
        ]}
        loading={false}
        error=""
        total={1}
      />
    );
    expect(screen.getByTestId("page-header")).toHaveTextContent("search-query");
    expect(screen.getByTestId("drink-card")).toHaveTextContent("Mojito");
  });

  it("renders all drinks when no query is provided", () => {
    render(
      <SearchDrinksResults
        query=""
        drinks={[
          {
            id: 1,
            name: "Mojito",
            category: "Cocktail",
            image: "http:/example.com/image.jpg",
          },
        ]}
        loading={false}
        error=""
        total={1}
      />
    );
    expect(screen.getByTestId("page-header")).toHaveTextContent("all-drinks");
    expect(screen.getByTestId("drink-card")).toHaveTextContent("Mojito");
  });
});
