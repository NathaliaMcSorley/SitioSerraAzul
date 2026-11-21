import { describe, expect, it } from "vitest";

import { getStaticAvailabilityData } from "@/content/availability";
import {
  addMonths,
  getCalendarCells,
  getTodayInPropertyTimeZone,
  isBeforeDate,
  toDateKey,
} from "./availability-calendar";

describe("availability calendar date helpers", () => {
  it("uses the property's timezone when determining today", () => {
    expect(getTodayInPropertyTimeZone(new Date("2026-03-01T01:00:00Z"))).toEqual({
      year: 2026,
      month: 1,
      day: 28,
    });
  });

  it("handles month and year boundaries", () => {
    expect(addMonths({ year: 2026, month: 11 }, 1)).toEqual({
      year: 2027,
      month: 0,
    });
    expect(addMonths({ year: 2026, month: 0 }, -1)).toEqual({
      year: 2025,
      month: 11,
    });
  });

  it("aligns weekdays and includes leap days", () => {
    const february2024 = getCalendarCells({ year: 2024, month: 1 });
    const february2025 = getCalendarCells({ year: 2025, month: 1 });

    expect(february2024[4]).toEqual({ year: 2024, month: 1, day: 1 });
    expect(february2024).toContainEqual({ year: 2024, month: 1, day: 29 });
    expect(february2025[6]).toEqual({ year: 2025, month: 1, day: 1 });
    expect(february2025).not.toContainEqual({ year: 2025, month: 1, day: 29 });
  });

  it("compares dates without time or timezone shifts", () => {
    expect(isBeforeDate({ year: 2026, month: 0, day: 14 }, { year: 2026, month: 0, day: 15 })).toBe(true);
    expect(toDateKey({ year: 2026, month: 0, day: 15 })).toBe("2026-01-15");
  });

  it("generates five complete years of explicitly demonstrative statuses", () => {
    const availability = getStaticAvailabilityData(2024);

    expect(Object.keys(availability)).toHaveLength(1827);
    expect(availability["2024-02-29"]).toBe("available");
    expect(availability["2025-02-28"]).toBe("available");
    expect(availability["2025-02-29"]).toBeUndefined();
    expect(availability["2024-05-01"]).toBe("unavailable");
    expect(availability["2028-12-25"]).toBe("unavailable");
  });
});
