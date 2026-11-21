import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { AvailabilityCalendar } from "./availability-calendar";

describe("AvailabilityCalendar", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("starts on the current property-local month and stops at both bounds", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-15T12:00:00-03:00"));
    render(<AvailabilityCalendar />);

    expect(
      screen.getByRole("heading", { name: "Janeiro de 2026" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Mês anterior" })).toBeDisabled();

    const nextMonth = screen.getByRole("button", { name: "Próximo mês" });
    for (let month = 0; month < 12; month += 1) {
      fireEvent.click(nextMonth);
    }

    expect(
      screen.getByRole("heading", { name: "Janeiro de 2027" }),
    ).toBeInTheDocument();
    expect(nextMonth).toBeDisabled();

    fireEvent.click(nextMonth);
    expect(
      screen.getByRole("heading", { name: "Janeiro de 2027" }),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Mês anterior" }));
    expect(
      screen.getByRole("heading", { name: "Dezembro de 2026" }),
    ).toBeInTheDocument();
  });

  it("labels past dates, today, and demonstrative availability accessibly", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-15T12:00:00-03:00"));
    render(<AvailabilityCalendar />);

    expect(
      screen.getByRole("gridcell", {
        name: "14 de janeiro de 2026. Data passada; não disponível para reservas futuras.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("gridcell", {
        name: "15 de janeiro de 2026, hoje. Disponível, dado demonstrativo.",
      }),
    ).toHaveAttribute("aria-current", "date");

    fireEvent.click(screen.getByRole("button", { name: "Próximo mês" }));
    expect(
      screen.getByRole("gridcell", {
        name: "14 de fevereiro de 2026. Indisponível, dado demonstrativo.",
      }),
    ).toBeInTheDocument();
  });
});
