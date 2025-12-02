import React from "react";
import { DateItem } from "../../components/card/DateItem";

export const DateContainer = ({ data }) => {
  return data.map((date) => <DateItem key={date.id} data={date} />);
};
