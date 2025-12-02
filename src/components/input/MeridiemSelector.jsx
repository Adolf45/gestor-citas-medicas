import React from "react";
import { useState } from "react";
export const MeridiemSelector = ({data}) => {
  const [select, setSelect] = useState(data);
    return (
    <div>
      <select
        name="meridiemPatient"
        id="meridiemPatient"
        className="focus:outline-none focus:ring-0 p-2"
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
};
