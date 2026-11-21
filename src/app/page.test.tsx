import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the project heading", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: "Vacation Farmhouse Rental Platform",
      }),
    ).toBeInTheDocument();
  });
});
