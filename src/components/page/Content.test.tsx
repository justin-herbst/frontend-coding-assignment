import { render } from "@testing-library/react";
import Content from "./Content";

describe("Content", () => {
  it("renders the main element", () => {
    const text = "Test Content";
    const { getByTestId } = render(<Content>{text}</Content>);
    const content = getByTestId("page-content");
    expect(content.textContent).toBe(text);
  });
});
