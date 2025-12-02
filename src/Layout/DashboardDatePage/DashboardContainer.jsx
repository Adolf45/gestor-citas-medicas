import React from "react";
import { DashboardHead } from "./DashboardHead";
import { DateContainer } from "./DateContainer";
export const DashboardContainer = ({ data }) => {
  return (
    <table className="w-full text-left">
      <DashboardHead />
      <tbody>
        <DateContainer data={data}/>
      </tbody>
    </table>
  );
};
