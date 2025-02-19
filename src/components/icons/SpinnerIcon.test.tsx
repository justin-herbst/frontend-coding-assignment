import { render } from "@testing-library/react";
import SpinnerIcon from "./SpinnerIcon";

describe("SpinnerIcon", () => {
  it("applies the className prop", () => {
    const className = "test-class";
    const { container } = render(<SpinnerIcon className={className} />);
    const svgElement = container.getElementsByTagName("svg");

    expect(svgElement.length).toBe(1);
    expect(svgElement[0].classList[0]).toBe(className);
  });
});
