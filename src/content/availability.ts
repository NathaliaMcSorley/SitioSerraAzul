import {
  AVAILABILITY_DATA_YEARS,
  type AvailabilityStatus,
  type DateKey,
} from "@/lib/availability-calendar";

export const availabilityDataNotice =
  "Indicadores demonstrativos: não representam disponibilidade real ou atualizada.";

const sampleUnavailableMonthDays = new Set([
  "01-01",
  "01-02",
  "02-14",
  "05-01",
  "07-07",
  "10-12",
  "12-24",
  "12-25",
]);

export function getStaticAvailabilityData(
  firstYear: number,
): Record<DateKey, AvailabilityStatus> {
  const availability: Record<DateKey, AvailabilityStatus> = {};

  for (let year = firstYear; year < firstYear + AVAILABILITY_DATA_YEARS; year += 1) {
    const daysInYear = new Date(year, 1, 29).getDate() === 29 ? 366 : 365;

    for (let dayOfYear = 0; dayOfYear < daysInYear; dayOfYear += 1) {
      const date = new Date(year, 0, dayOfYear + 1);
      const dateKey = [
        year,
        String(date.getMonth() + 1).padStart(2, "0"),
        String(date.getDate()).padStart(2, "0"),
      ].join("-");
      const monthDay = dateKey.slice(5);

      availability[dateKey] = sampleUnavailableMonthDays.has(monthDay)
        ? "unavailable"
        : "available";
    }
  }

  return availability;
}
