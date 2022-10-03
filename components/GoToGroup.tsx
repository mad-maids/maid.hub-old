// create a react component which will have input field and button
// user enters a number and click on button, it will set group number to state

import React, { useEffect, useState } from "react";

const GoToGroup = ({
  action,
  setAction,
}: {
  action: any;
  setAction: any;
}): React.ReactElement => {
  const [group, setGroup] = useState("");

  useEffect(() => {
    if (group !== "") {
      setAction(group);
    }
  }, [action, group]);

  return (
    <div className="px-1 py-3 items-center justify-between sm:px-2 text-center select-none">
      <input
        id="query"
        className="text-white bg-black block w-full px-2 py-2 leading-normal border rounded-lg outline-none shadow hover:shadow-sm focus:shadow-sm appearance-none focus:border-gray-300 hover:border-gray-300"
        type="text"
        placeholder="Course"
        value={group}
        onChange={(e) => setGroup(e.target.value)}
      />
    </div>
  );
};

export default GoToGroup;
