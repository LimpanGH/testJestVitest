import { describe, expect, vi, test } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import { Button } from "./button";

test("Should call the onClick handler when clicked", () => {
  const onClickMock = vi.fn();
  render(<Button label="Click me" onClick={onClickMock} />);

  expect(screen.getByText("Click me")).toBeDefined();

  const button = screen.getByText("Click me");
  fireEvent.click(button);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
