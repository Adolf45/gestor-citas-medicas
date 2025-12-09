import React from "react";
import { DateItem } from "../../components/card/DateItem";

export const DateContainer = ({ data }) => {
  return data.map((date,i) => <DateItem key={i} data={date} />);
};
