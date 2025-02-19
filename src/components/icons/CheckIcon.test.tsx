import { render } from "@testing-library/react";
import CheckIcon from "./CheckIcon";

describe("CheckIcon", () => {
  it("applies the className prop", () => {
    const className = "test-class";
    const { container } = render(<CheckIcon className={className} />);
    const svgElement = container.getElementsByTagName("svg");

    expect(svgElement.length).toBe(1);
    expect(svgElement[0].classList[0]).toBe(className);
  });
});
