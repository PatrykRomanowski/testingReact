import { render, screen } from "../../test-utils";
import { AppProviders } from "../providers/AppProviders";
import { MuiMode } from "./MuiMode";

describe("muiMode", () => {
  test("renders test correctly", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
