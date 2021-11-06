import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GroupSelector = ({
  action,
  setAction,
  length,
}: {
  action: any;
  setAction: any;
  length: number;
}): React.ReactElement => {
  const groups = Array.from(Array(length).keys()).map((i) => ({
    name: (i + 1).toString(),
    value: i,
  }));

  const prev = (old: number) => {
    if (old > 0) {
      setAction(old - 1);
    } else {
      console.log("exceeded");
    }
  };

  const next = (old: number) => {
    if (old < length - 1) {
      setAction(old + 1);
    } else {
      console.log("exceeded");
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

          {groups.map((group) => {
            if (
              parseInt(String(group.value)) === parseInt(action) - 1 ||
              group.value === action ||
              parseInt(String(group.value)) === parseInt(action) + 1
            ) {
              if (group.value === action) {
                return (
                  <a className="cursor-pointer z-10 bg-gray-200 border-white text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    {group.name}
                  </a>
                );
              } else {
                return (
                  <a
                    onClick={() => {
                      setAction(group.value);
                    }}
                    className="cursor-pointer bg-black border-white text-white hover:bg-white hover:text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    {group.name}
                  </a>
                );
              }
            }
          })}

          {(() => {
            if (parseInt(action) < length - 2) {
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

export default GroupSelector;
