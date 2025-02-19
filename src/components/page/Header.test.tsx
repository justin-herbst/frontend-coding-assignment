import { render } from "@testing-library/react";
import Header from "./Header";
import { MockSearchDrinksContextProvider } from "@/features/search/SearchDrinksContext";

jest.mock("next-intl");

describe("Header", () => {
  it("renders the page header", () => {
    const { getByTestId } = render(
      <MockSearchDrinksContextProvider>
        <Header />
      </MockSearchDrinksContextProvider>
    );
    const content = getByTestId("page-header");
    expect(content).not.toBeNull();
  });
});
