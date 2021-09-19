import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { validateCLIOptions } from "jest-validate";

const DaySelector = ({
  action,
  setAction,
}: {
  action: any;
  setAction: any;
}): React.ReactElement => {
  const weekdays = [
    {
      name: "Mon",
      value: "1",
    },
    {
      name: "Tue",
      value: "2",
    },
    {
      name: "Wed",
      value: "3",
    },
    {
      name: "Thu",
      value: "4",
    },
    {
      name: "Fri",
      value: "5",
    },
    {
      name: "Sat",
      value: "6",
    },
  ];

  const prev = (old: string) => {
    if (parseInt(old) > 1) {
      setAction((parseInt(old) - 1).toString());
    }
  };

  const next = (old: string) => {
    if (parseInt(old) < 6) {
      setAction((parseInt(old) + 1).toString());
    }
  };

  return (
    <div className="px-1 py-3 items-center justify-between sm:px-2 text-center select-none">
      <div className="items-center justify-center">
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            onClick={() => prev(action)}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-white bg-black text-sm font-medium text-white hover:bg-white hover:text-black"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </a>

          {(() => {
            if (parseInt(action) > 2) {
              return (
                <span className="relative inline-flex items-center px-4 py-2 border border-white bg-black text-sm font-medium text-white">
                  ...
                </span>
              );
            }
          })()}

          {weekdays.map((day) => {
            if (
              parseInt(day.value) === parseInt(action) - 1 ||
              day.value === action ||
              parseInt(day.value) === parseInt(action) + 1
            ) {
              if (day.value === action) {
                return (
                  <a className="cursor-pointer z-10 bg-gray-200 border-white text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    {day.name}
                  </a>
                );
              } else {
                return (
                  <a
                    onClick={() => {
                      setAction(day.value);
                    }}
                    className="cursor-pointer bg-black border-white text-white hover:bg-white hover:text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    {day.name}
                  </a>
                );
              }
            }
          })}

          {(() => {
            if (parseInt(action) < 5) {
              return (
                <span className="relative inline-flex items-center px-4 py-2 border border-white bg-black text-sm font-medium text-white">
                  ...
                </span>
              );
            }
          })()}

          <a
            onClick={() => next(action)}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-white bg-black text-sm font-medium text-white hover:bg-white hover:text-black"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default DaySelector;
