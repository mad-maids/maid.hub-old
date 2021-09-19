import { inspect } from "util";
import React from "react";

const Timetable = ({ table, today }: { table: any; today: any }) => {
  const date = new Date();
  if (table.length === 0) {
    return (
      <div>
        <div className="rounded-md bg-green-200 border border-green-400 p-4 my-4">
          <div className="flex">
            <div className="flex-shrink-0">🎉</div>
            <div className="ml-3">
              <h3 className="text-sm leading-5 font-medium text-green-800">
                You don't have any lesson this day!
              </h3>
              <div className="mt-2 text-sm leading-5 text-green-700">
                Feel free to get some chill and relax...
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border border-white sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-black">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                    >
                      Module
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                    >
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-black divide-y divide-gray-200">
                  {table.map((subject: any) => {
                    return (
                      <tr key={subject.name}>
                        <td
                          className={
                            date.getDay() == today &&
                            (date.getHours().toString() == subject.start ||
                              date.getHours().toString() == subject.start + 1)
                              ? "bg-blue-900" + "px-6 py-4 whitespace-nowrap"
                              : "px-6 py-4 whitespace-nowrap"
                          }
                        >
                          <div className="flex items-center">
                            <div className="h-11 w-12 text-center justify-center items-center border rounded-md">
                              <div className="text-sm text-gray-100">
                                {subject.start}:00
                              </div>
                              <div className="text-sm text-gray-300">
                                {subject.start + subject.length}:00
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          className={
                            date.getDay() == today &&
                            (date.getHours().toString() == subject.start ||
                              date.getHours().toString() == subject.start + 1)
                              ? "bg-blue-900" + "px-6 py-4 whitespace-nowrap"
                              : "px-6 py-4 whitespace-nowrap"
                          }
                        >
                          <div className="text-sm text-gray-100">
                            {subject.name}
                          </div>
                          <div className="text-sm text-gray-300">
                            {subject.tutor}
                          </div>
                        </td>
                        <td
                          className={
                            date.getDay() == today &&
                            (date.getHours().toString() == subject.start ||
                              date.getHours().toString() == subject.start + 1)
                              ? "bg-blue-900" + "px-6 py-4 whitespace-nowrap"
                              : "px-6 py-4 whitespace-nowrap"
                          }
                        >
                          <span
                            className={
                              subject.type === "online"
                                ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-300 text-red-900 text-center"
                                : "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-900 text-center"
                            }
                          >
                            {subject.type}
                          </span>
                        </td>
                        <td
                          className={
                            date.getDay() == today &&
                            (date.getHours().toString() == subject.start ||
                              date.getHours().toString() == subject.start + 1)
                              ? "bg-blue-900" +
                                "px-6 py-4 whitespace-nowrap text-sm text-gray-200"
                              : "px-6 py-4 whitespace-nowrap text-sm text-gray-200"
                          }
                        >
                          {subject.location}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Timetable;
