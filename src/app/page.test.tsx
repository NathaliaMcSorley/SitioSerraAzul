import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the official public homepage heading and navigation", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: "Escape para o Campo" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "O Sítio" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Galeria" })).toBeInTheDocument();
    expect(screen.getAllByRole("navigation").length).toBeGreaterThan(0);
  });

  it("opens and closes the mobile navigation", async () => {
    const user = userEvent.setup();
    render(<Home />);

    const button = screen.getByRole("button", { name: "Open navigation" });
    await user.click(button);

    expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
    expect(
      screen.getByRole("button", { name: "Close navigation" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Close navigation" }));
    expect(
      screen.queryByRole("navigation", { name: "Mobile navigation" }),
    ).not.toBeInTheDocument();
  });
});
