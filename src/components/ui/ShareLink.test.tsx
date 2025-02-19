import { render, screen, fireEvent } from "@testing-library/react";
import ShareLink from "./ShareLink";
import { useTranslations } from "next-intl";
import { act } from "react";

const writeText = jest.fn();

Object.assign(navigator, {
  clipboard: {
    writeText,
  },
});

jest.mock("next-intl", () => ({
  useTranslations: jest.fn(),
}));

jest.mock("../icons", () => ({
  CheckIcon: () => <svg data-testid="check-icon" />,
  CopyIcon: () => <svg data-testid="copy-icon" />,
}));

describe("ShareLink", () => {
  const t = jest.fn((key) => key);

  beforeEach(() => {
    (useTranslations as jest.Mock).mockReturnValue(t);
  });

  it("renders the ShareLink component", () => {
    render(<ShareLink url="https://example.com" />);
    expect(screen.getByText("https://example.com")).not.toBeNull();
    expect(screen.getByTestId("copy-icon")).not.toBeNull();
    expect(screen.getByText("copy")).not.toBeNull();
  });

  it("copies the URL to clipboard and shows the check icon", async () => {
    render(<ShareLink url="https://example.com" />);
    const button = screen.getByRole("button");
    await act(async () => fireEvent.click(button));

    expect(await screen.findByTestId("check-icon")).not.toBeNull();
    expect(screen.getByText("copied")).not.toBeNull();
    expect(writeText).toHaveBeenCalledWith("https://example.com");
  });
});
