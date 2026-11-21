"use client";

import { useMemo, useState, useSyncExternalStore } from "react";

import { availabilityDataNotice, getStaticAvailabilityData } from "@/content/availability";
import {
  addMonths,
  compareMonths,
  formatDateLabel,
  formatMonthLabel,
  getCalendarCells,
  getTodayInPropertyTimeZone,
  isBeforeDate,
  MAX_BROWSABLE_MONTH_OFFSET,
  toDateKey,
  type CalendarDate,
  type CalendarMonth,
  type DateKey,
} from "@/lib/availability-calendar";

let cachedToday:
  | { key: DateKey; date: CalendarDate }
  | undefined;

function getClientTodaySnapshot(): CalendarDate {
  const date = getTodayInPropertyTimeZone();
  const key = toDateKey(date);

  if (cachedToday?.key !== key) {
    cachedToday = { key, date };
  }

  return cachedToday.date;
}

function subscribeToToday() {
  return () => {};
}

function getServerTodaySnapshot(): null {
  return null;
}

const weekdays = [
  { short: "D", full: "domingo" },
  { short: "S", full: "segunda-feira" },
  { short: "T", full: "terça-feira" },
  { short: "Q", full: "quarta-feira" },
  { short: "Q", full: "quinta-feira" },
  { short: "S", full: "sexta-feira" },
  { short: "S", full: "sábado" },
];

export function AvailabilityCalendar() {
  const today = useSyncExternalStore(
    subscribeToToday,
    getClientTodaySnapshot,
    getServerTodaySnapshot,
  );
  const [selectedMonth, setSelectedMonth] = useState<CalendarMonth | null>(null);
  const todayYear = today?.year;
  const availability = useMemo(
    () => (todayYear === undefined ? null : getStaticAvailabilityData(todayYear)),
    [todayYear],
  );

  const month =
    selectedMonth ??
    (today ? { year: today.year, month: today.month } : null);

  if (!today || !month || !availability) {
    return (
      <p className="mt-4 text-sm text-[var(--color-muted)]" role="status">
        Carregando calendário...
      </p>
    );
  }

  const calendarToday = today;
  const displayedMonth = month;
  const availabilityByDate = availability;
  const firstMonth = { year: calendarToday.year, month: calendarToday.month };
  const lastMonth = addMonths(firstMonth, MAX_BROWSABLE_MONTH_OFFSET);
  const cells = getCalendarCells(displayedMonth);
  const weeks = Array.from({ length: cells.length / 7 }, (_, index) =>
    cells.slice(index * 7, index * 7 + 7),
  );
  const canGoPrevious = compareMonths(displayedMonth, firstMonth) > 0;
  const canGoNext = compareMonths(displayedMonth, lastMonth) < 0;

  function navigateMonth(amount: number) {
    const nextMonth = addMonths(displayedMonth, amount);
    if (
      compareMonths(nextMonth, firstMonth) < 0 ||
      compareMonths(nextMonth, lastMonth) > 0
    ) {
      return;
    }

    setSelectedMonth(nextMonth);
  }

  function getDateStatus(date: CalendarDate, dateKey: DateKey): string {
    if (isBeforeDate(date, calendarToday)) {
      return "Data passada; não disponível para reservas futuras.";
    }

    return availabilityByDate[dateKey] === "unavailable"
      ? "Indisponível, dado demonstrativo."
      : "Disponível, dado demonstrativo.";
  }

  return (
    <div className="mt-5 rounded-md border border-[#e2d8bd] bg-white p-4 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          aria-label="Mês anterior"
          disabled={!canGoPrevious}
          onClick={() => navigateMonth(-1)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e2d8bd] text-xl text-[var(--color-heading)] transition-colors hover:bg-[#f4efdf] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f7555]"
        >
          <span aria-hidden="true">&lsaquo;</span>
        </button>
        <h3
          aria-live="polite"
          className="font-display text-center text-lg font-semibold text-[var(--color-heading)] sm:text-xl"
        >
          {formatMonthLabel(displayedMonth)}
        </h3>
        <button
          type="button"
          aria-label="Próximo mês"
          disabled={!canGoNext}
          onClick={() => navigateMonth(1)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e2d8bd] text-xl text-[var(--color-heading)] transition-colors hover:bg-[#f4efdf] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f7555]"
        >
          <span aria-hidden="true">&rsaquo;</span>
        </button>
      </div>

      <div
        role="grid"
        aria-label={`Calendário de ${formatMonthLabel(displayedMonth)}`}
        className="mt-4"
      >
        <div role="row" className="grid grid-cols-7 gap-1">
          {weekdays.map((weekday, index) => (
            <div
              key={`${weekday.full}-${index}`}
              role="columnheader"
              aria-label={weekday.full}
              className="pb-2 text-center text-xs font-bold text-[#768164]"
            >
              {weekday.short}
            </div>
          ))}
        </div>
        {weeks.map((week, weekIndex) => (
          <div
            key={`week-${weekIndex}`}
            role="row"
            className="grid grid-cols-7 gap-1"
          >
            {week.map((date, dayIndex) => {
              if (!date) {
                return (
                  <div
                    key={`empty-${weekIndex}-${dayIndex}`}
                    role="gridcell"
                    aria-hidden="true"
                    className="h-10"
                  />
                );
              }

              const dateKey = toDateKey(date);
              const isPast = isBeforeDate(date, calendarToday);
              const isAvailable =
                !isPast && availabilityByDate[dateKey] === "available";
              const isToday = dateKey === toDateKey(calendarToday);
              const label = `${formatDateLabel(date)}${isToday ? ", hoje" : ""}. ${getDateStatus(date, dateKey)}`;

              return (
                <div
                  key={dateKey}
                  role="gridcell"
                  aria-label={label}
                  aria-current={isToday ? "date" : undefined}
                  className={`flex h-10 flex-col items-center justify-center gap-0.5 rounded-md text-xs sm:text-sm ${
                    isPast ? "text-[var(--color-muted)]" : "text-[var(--color-body)]"
                  } ${
                    isToday ? "ring-2 ring-inset ring-[#b78a45]" : ""
                  }`}
                >
                  <span>{date.day}</span>
                  {!isPast ? (
                    <span
                      aria-hidden="true"
                      className={`flex h-3.5 w-3.5 items-center justify-center rounded-full text-[9px] font-bold leading-none text-white ${
                        isAvailable ? "bg-[#4f7555]" : "bg-[#ad5347]"
                      }`}
                    >
                      {isAvailable ? "✓" : "×"}
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <ul
        aria-label="Legenda de disponibilidade demonstrativa"
        className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#eee7d8] pt-4 text-xs text-[var(--color-body)] sm:text-sm"
      >
        <li className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="flex h-4 w-4 items-center justify-center rounded-full bg-[#4f7555] text-[10px] font-bold text-white"
          >
            ✓
          </span>
          Disponível (exemplo)
        </li>
        <li className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ad5347] text-[10px] font-bold text-white"
          >
            ×
          </span>
          Indisponível (exemplo)
        </li>
        <li className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-3 w-3 rounded-full border border-[var(--color-muted)]"
          />
          Data passada
        </li>
      </ul>
      <p className="mt-3 text-xs leading-5 text-[var(--color-muted)]">
        {availabilityDataNotice}
      </p>
    </div>
  );
}
