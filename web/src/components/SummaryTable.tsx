import { generateRangeDatesFromYearStart } from "../utils/generate-dates-from-year-start";
import { HabitDay } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateRangeDatesFromYearStart();

const minimunSummaryDatesSize = 18 * 7; // 18 weeks
const amountOfDaysToFull = minimunSummaryDatesSize - summaryDates.length;

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, index) => {
          return (
            <div
              key={`${weekDay}-${index}`}
              className="text-zinc-400 text-xl font-bold w-10 h-10 flex items-center justify-center"
            >
              {weekDay}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          return (
            <HabitDay 
              key={date.toString()} 
              amount={5} 
              completed={Math.round(Math.random() * 5)} 
            />

          );
        })}

        {amountOfDaysToFull > 0 &&
          Array.from({ length: amountOfDaysToFull }).map((_, i) => {
            return (
              <div key={i} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"></div>
            );
          })}
      </div>
    </div>
  );
}
