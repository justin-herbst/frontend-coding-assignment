import { render } from "@testing-library/react";
import PageHeader from "./PageHeader";

describe("PageHeader", () => {
  it("renders the page header", () => {
    const text = "Test Page Header";
    const { getByTestId } = render(<PageHeader>{text}</PageHeader>);
    const content = getByTestId("page-heading");
    expect(content.textContent).toBe(text);
  });
});
