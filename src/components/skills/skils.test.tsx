import { render, screen, logRoles } from "@testing-library/react";
import Skills from "./skils";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JAVASCRIPT"];

  test("render correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(skills.length);
  });

  test("renders Login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start Learning Button is not render", () => {
    render(<Skills skills={skills} />);
    const startLerningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLerningButton).not.toBeInTheDocument();
  });

  test("Start lerning button is eventualy displayed", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    const startLerningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 600,
      }
    );
    expect(startLerningButton).toBeInTheDocument();
  });
});
