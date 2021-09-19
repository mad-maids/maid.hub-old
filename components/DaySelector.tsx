import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

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

  return (
    <div className="px-1 py-3 items-center justify-between sm:px-2 text-center">
      <div className="items-center justify-center">
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </a>

          {weekdays.map((day) => {
            if (day.value === action) {
              return (
                <a className="cursor-pointer z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  {day.name}
                </a>
              );
            } else {
              return (
                <a
                  onClick={() => {
                    setAction(day.value);
                  }}
                  className="cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  {day.name}
                </a>
              );
            }
          })}
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
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
