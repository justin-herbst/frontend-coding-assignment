import { render, screen } from "@testing-library/react";
import DrinkDetails from "./DrinkDetails";
import { useTranslations } from "next-intl";
import "@testing-library/jest-dom";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn(),
}));

jest.mock("@/components/ui", () => ({
  Loading: () => <div data-testid="loading" />,
  ShareLink: ({ url }: { url: string }) => (
    <div data-testid="share-link">{url}</div>
  ),
}));

jest.mock("@/components/page", () => ({
  PageHeader: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="page-header">{children}</div>
  ),
}));

jest.mock(
  "./DrinkCategory",
  () =>
    ({ children }: { children: React.ReactNode }) =>
      <div data-testid="drink-category">{children}</div>
);

describe("DrinkDetails", () => {
  const t = jest.fn((key, { count } = {}) => {
    switch (key) {
      case "ingredients":
        return `Ingredients (${count})`;
      case "instructions":
        return "Instructions";
      case "glass-needed":
        return "Glass Needed";
      case "share-link":
        return "Share Link";
      default:
        return key;
    }
  });

  beforeEach(() => {
    (useTranslations as jest.Mock).mockReturnValue(t);
  });

  const mockDrink = {
    id: 1,
    name: "Mojito",
    image: "/mojito.jpg",
    category: "Cocktail",
    ingredients: [
      { name: "Rum", measurement: "50ml" },
      { name: "Mint", measurement: "10 leaves" },
    ],
    instructions: "Mix all ingredients.",
    container: "Highball glass",
  };

  it("renders loading state", () => {
    render(<DrinkDetails drink={null} loading={true} error="" />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("renders error state", () => {
    render(
      <DrinkDetails drink={null} loading={false} error="Error occurred" />
    );
    expect(screen.getByText("Error occurred")).toBeInTheDocument();
  });

  it("renders drink details", () => {
    render(<DrinkDetails drink={mockDrink} loading={false} error="" />);
    expect(screen.getByTestId("page-header")).toHaveTextContent("Mojito");
    expect(screen.getByAltText("Mojito")).toBeInTheDocument();
    expect(screen.getByTestId("drink-category")).toHaveTextContent("Cocktail");
    expect(screen.getByText("Ingredients (2)")).toBeInTheDocument();
    expect(screen.getByText("50ml of Rum")).toBeInTheDocument();
    expect(screen.getByText("10 leaves of Mint")).toBeInTheDocument();
    expect(screen.getByText("Instructions")).toBeInTheDocument();
    expect(screen.getByText("Mix all ingredients.")).toBeInTheDocument();
    expect(screen.getByText("Glass Needed")).toBeInTheDocument();
    expect(screen.getByText("Highball glass")).toBeInTheDocument();
    expect(screen.getByTestId("share-link")).toHaveTextContent(
      "http://localhost:3000/share/1/mojito"
    );
  });
});
