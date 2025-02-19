import { render } from "@testing-library/react";
import NextIcon from "./NextIcon";

describe("NextIcon", () => {
  it("applies the className prop", () => {
    const className = "test-class";
    const { container } = render(<NextIcon className={className} />);
    const svgElement = container.getElementsByTagName("svg");

    expect(svgElement.length).toBe(1);
    expect(svgElement[0].classList[0]).toBe(className);
  });
});
