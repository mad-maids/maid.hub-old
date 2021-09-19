import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GroupSelector = ({
  action,
  setAction,
}: {
  action: any;
  setAction: any;
}): React.ReactElement => {
  const groups = [
    {
      name: "1",
      value: 0,
    },
    {
      name: "2",
      value: 1,
    },
    {
      name: "3",
      value: 2,
    },
    {
      name: "4",
      value: 3,
    },
    {
      name: "5",
      value: 4,
    },
    {
      name: "6",
      value: 5,
    },
  ];

  const prev = (old: number) => {
    if (old > 0) {
      setAction(old - 1);
    } else {
      console.log("exceeded");
    }
  };

  const next = (old: number) => {
    if (old < 5) {
      console.log(old + 1);
      setAction(old + 1);
    } else {
      console.log("exceeded");
    }
  };

  return (
    <div className="px-1 py-3 items-center justify-between sm:px-2 text-center">
      <div className="items-center justify-center">
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            onClick={() => prev(action)}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </a>

          {groups.map((group) => {
            if (group.value === action) {
              return (
                <a className="cursor-pointer z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  {group.name}
                </a>
              );
            } else {
              return (
                <a
                  onClick={() => {
                    setAction(group.value);
                  }}
                  className="cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  {group.name}
                </a>
              );
            }
          })}
          <a
            onClick={() => next(action)}
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

export default GroupSelector;
