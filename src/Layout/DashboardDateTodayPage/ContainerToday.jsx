import React from "react";
import { TodayDateCard } from "../../components/card/TodayDateCard";
import { calculateDateRange } from "../../utils/dateHelper";
export const ContainerToday = ({ cancelled,setCancelled, setFilterDate,todayTotal, todayAttended, todayCancelled}) => {
  function handleClickFilterState(prop) {
  setCancelled(prop);
}

function handleClick() {
  setCancelled(null);
  setFilterDate(calculateDateRange("Hoy"));
}
  return (
    <div className="flex justify-center items-center w-full flex-wrap gap-20">
      <TodayDateCard
        title="Citas para hoy"
        quantity={todayTotal}
        bgColor="bg-green-200"
        handleClick={handleClick}
        prop={null}
        cancelled={cancelled}
      />
      <TodayDateCard
        title="Citas canceladas"
        quantity={todayCancelled}
        bgColor="bg-violet-200"
        handleClick={handleClickFilterState}
        prop={true}
        cancelled={cancelled}
      />
      <TodayDateCard
        title="Pacientes atendidos"
        quantity={todayAttended}
        bgColor="bg-red-200"
        handleClick={handleClickFilterState}
        prop={false}
        cancelled={cancelled}
      />
    </div>
  );
};
