import { describe, expect, vi, test, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import { Button } from "./button";

describe("Button", () => {
  it("renders with the correct label", () => {
    render(<Button label="Click me" onClick={() => {}} />);
    expect(screen.getByText("Click me")).toBeDefined();
    cleanup();
  });

  it("calls the onClick handler when clicked", () => {
    const onClickMock = vi.fn();
    render(<Button label="Click me" onClick={onClickMock} />);
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
    cleanup();
  });
});

test("Should call the onClick handler when clicked", () => {
  const onClickMock = vi.fn();
  render(<Button label="Click me" onClick={onClickMock} />);

  expect(screen.getByText("Click me")).toBeDefined();

  const button = screen.getByText("Click me");
  fireEvent.click(button);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
