export const PROPERTY_TIME_ZONE = "America/Sao_Paulo";
export const AVAILABILITY_DATA_YEARS = 5;
export const MAX_BROWSABLE_MONTH_OFFSET = 12;

export type CalendarDate = {
  year: number;
  month: number;
  day: number;
};

export type CalendarMonth = Pick<CalendarDate, "year" | "month">;

export type AvailabilityStatus = "available" | "unavailable";

export type DateKey = string;

export function getTodayInPropertyTimeZone(now = new Date()): CalendarDate {
  const dateParts = new Intl.DateTimeFormat("en-US", {
    timeZone: PROPERTY_TIME_ZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(now);
  const values = new Map(dateParts.map(({ type, value }) => [type, value]));

  return {
    year: Number(values.get("year")),
    month: Number(values.get("month")) - 1,
    day: Number(values.get("day")),
  };
}

export function toDateKey(date: CalendarDate): DateKey {
  return `${date.year}-${String(date.month + 1).padStart(2, "0")}-${String(date.day).padStart(2, "0")}`;
}

export function addMonths(month: CalendarMonth, amount: number): CalendarMonth {
  const absoluteMonth = month.year * 12 + month.month + amount;

  return {
    year: Math.floor(absoluteMonth / 12),
    month: ((absoluteMonth % 12) + 12) % 12,
  };
}

export function compareMonths(left: CalendarMonth, right: CalendarMonth): number {
  return left.year * 12 + left.month - (right.year * 12 + right.month);
}

export function getCalendarCells(month: CalendarMonth): Array<CalendarDate | null> {
  const firstWeekday = new Date(month.year, month.month, 1).getDay();
  const daysInMonth = new Date(month.year, month.month + 1, 0).getDate();
  const cellCount = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;

  return Array.from({ length: cellCount }, (_, index) => {
    const day = index - firstWeekday + 1;
    return day >= 1 && day <= daysInMonth ? { ...month, day } : null;
  });
}

export function isBeforeDate(date: CalendarDate, comparison: CalendarDate): boolean {
  return toDateKey(date) < toDateKey(comparison);
}

export function formatMonthLabel(month: CalendarMonth): string {
  const label = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(month.year, month.month, 1)));

  return label.charAt(0).toLocaleUpperCase("pt-BR") + label.slice(1);
}

export function formatDateLabel(date: CalendarDate): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(date.year, date.month, date.day)));
}
