import { render } from "@testing-library/react";
import CopyIcon from "./CopyIcon";

describe("CopyIcon", () => {
  it("applies the className prop", () => {
    const className = "test-class";
    const { container } = render(<CopyIcon className={className} />);
    const svgElement = container.getElementsByTagName("svg");

    expect(svgElement.length).toBe(1);
    expect(svgElement[0].classList[0]).toBe(className);
  });
});
