import { inspect } from "util";

const Timetable = ({ table, today }: { table: any; today: any }) => {
  const date = new Date();
  if (table.length === 0) {
    return (
      <div>
      <div className="rounded-md bg-green-200 border border-green-400 p-4 my-4">
        <div className="flex">
          <div className="flex-shrink-0">
            🎉
          </div>
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
    )
  } else {
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Module
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {table.map((subject: any) => {
                    if (date.getDay() == today) {
                      if (
                        date.getHours().toString() == subject.start ||
                        date.getHours().toString() == subject.start + 1
                      ) {
                        return (
                          <tr key={subject.name}>
                            <td className="bg-blue-100 px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-11 w-12 text-center justify-center items-center border rounded-md">
                                  <div className="text-sm text-gray-500">
                                    {subject.start}:00
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {subject.start + subject.length}:00
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="bg-blue-100 px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {subject.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {subject.tutor}
                              </div>
                            </td>
                            <td className="bg-blue-100 px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-900 text-center">
                                {subject.type}
                              </span>
                            </td>
                            <td className="bg-blue-100 px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {subject.location}
                            </td>
                          </tr>
                        );
                      } else {
                        return (
                          <tr key={subject.name}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-11 w-12 text-center justify-center items-center border rounded-md">
                                  <div className="text-sm text-gray-500">
                                    {subject.start}:00
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {subject.start + subject.length}:00
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {subject.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {subject.tutor}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-900 text-center">
                                {subject.type}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {subject.location}
                            </td>
                          </tr>
                        );
                      }
                    } else {
                      return (
                        <tr key={subject.name}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-11 w-12 text-center justify-center items-center border rounded-md">
                                <div className="text-sm text-gray-500">
                                  {subject.start}:00
                                </div>
                                <div className="text-sm text-gray-500">
                                  {subject.start + subject.length}:00
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {subject.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {subject.tutor}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
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
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {subject.location}
                          </td>
                        </tr>
                      );
                    }
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
