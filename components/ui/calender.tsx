"use client"

import type * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { getClasses as buttonVariants} from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

const merge = (...classes: (string | undefined | false)[]) =>
  classes.filter(Boolean).join(" ")

const CustomNav = ({ nextMonth, previousMonth, onNextClick, onPreviousClick }: any) => (
  <div className="flex justify-between items-center px-1 py-1">
    <button
      type="button"
      disabled={!previousMonth}
      onClick={() => onPreviousClick()}
      className="h-7 w-7 p-0 rounded-md bg-transparent text-pink-600 dark:text-fuchsia-300 hover:bg-pink-100 dark:hover:bg-fuchsia-900/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
    >
      <ChevronLeft className="h-4 w-4" />
    </button>
    <button
      type="button"
      disabled={!nextMonth}
      onClick={() => onNextClick()}
      className="h-7 w-7 p-0 rounded-md bg-transparent text-pink-600 dark:text-fuchsia-300 hover:bg-pink-100 dark:hover:bg-fuchsia-900/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
    >
      <ChevronRight className="h-4 w-4" />
    </button>
  </div>
)

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={merge("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 pb-2 relative items-center",
        caption_label: "text-sm font-semibold text-[var(--foreground)] dark:text-[var(--background)]",
        nav: "space-x-1 flex items-center",
        nav_button: "opacity-0", // Hide default nav buttons
        nav_button_previous: "hidden",
        nav_button_next: "hidden",
        table: "w-full border-collapse space-y-1",
        head_row: "flex mb-1",
        head_cell: "text-pink-500 dark:text-fuchsia-300 w-9 font-medium text-xs text-center",
        row: "flex w-full mt-1",
        cell: merge(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20"
        ),
        day: merge(
          "h-9 w-9 p-0 font-normal rounded-md transition-colors duration-150",
          "text-[var(--foreground)] dark:text-[var(--background)]",
          "hover:bg-pink-100 dark:hover:bg-fuchsia-900/50",
          "focus:outline-none focus:ring-1 focus:ring-[var(--text-primary)]",
          "cursor-pointer"
        ),
        day_selected: merge(
          "bg-[var(--text-primary)] text-white font-medium",
          "hover:bg-[var(--text-secondary)] focus:bg-[var(--text-secondary)]"
        ),
        day_today: merge(
          "bg-pink-100 dark:bg-fuchsia-900/40",
          "text-[var(--text-primary)] dark:text-[var(--text-secondary)]",
          "font-medium"
        ),
        day_outside: merge(
          "text-pink-300 dark:text-fuchsia-600 opacity-50"
        ),
        day_disabled: "text-pink-200 dark:text-fuchsia-700 opacity-30 cursor-not-allowed",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Nav: CustomNav
      }}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar"
export default Calendar;