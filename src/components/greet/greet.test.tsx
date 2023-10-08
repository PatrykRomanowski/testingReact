import { render, screen } from "@testing-library/react";

import Greet from "./greet";
import Greet2 from "./greet2";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("Greed renders connectly_2", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

describe("Greet2", () => {
  test("Greet renders with a name JS", () => {
    render(<Greet2 name="Patryk" />);
    const textElement = screen.getByText("Hello2 Patryk");
    expect(textElement).toBeInTheDocument();
  });
});

test("Greet renders with a name", () => {
  render(<Greet name="Patryk" />);
  const textElement = screen.getByText("Hello2 Patryk");
  expect(textElement).toBeInTheDocument();
});
