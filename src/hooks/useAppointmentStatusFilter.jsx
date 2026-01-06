import { useState } from "react";
import { useMemo } from "react";
export const useAppointmentStatusFilter = (data) => {
  const [statusFilter, setStatusFilter] = useState(null);

  const NewfilteredData = useMemo(() => {
    if (statusFilter === null) return data;
    // true = cancelada, false = atendida
    return data.filter((item) =>
      statusFilter ? item.isCancelled : item.isAttended
    );
  }, [statusFilter, data]);

  return {
    NewfilteredData,
    setStatusFilter,
    statusFilter,
  };
};
