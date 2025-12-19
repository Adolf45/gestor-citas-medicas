const getFullDate = (item) => {
      let [hours, minutes] = item.timePatient.split(":").map(Number);

      //convierte el formato 12h a 24h
      if (item.meridiemPatient === "PM" && hours < 12) hours += 12;
      if (item.meridiemPatient === "AM" && hours === 12) hours = 0;

      const dateString = `${item.datePatient}T${hours
        .toString()
        .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`;
      return new Date(dateString).getTime();
    };

const timeAndDateSort = ({data,filterHour}) => {
  return [...data].sort((a, b) => {
    const fullTimeA = getFullDate(a);
    const fullTimeB = getFullDate(b);
    if (filterHour === "Ascendente") {
      return fullTimeA - fullTimeB;
    } else if (filterHour === "Descendente") {
      return fullTimeB - fullTimeA;
    }

    return 0;
  });
}

const filterData = (data, searchTerm, filterDate) => {
  if (!data) return [];

  return data.filter((item) => {
    const matchesName = item.namePatient
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let matchesDate = true;
    if (filterDate?.start && filterDate?.end) {
      const itemDate = new Date(item.datePatient + "T00:00:00");
      matchesDate = itemDate >= filterDate.start && itemDate <= filterDate.end;
    }

    return matchesName && matchesDate;
  });
};

const calculateDateRange = (rangeType) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let start = today;
  let end = new Date(today);

  switch (rangeType) {
    case "Hoy":
      end = today;
      break;
    case "1 Semana":
      end.setDate(today.getDate() + 7);
      break;
    case "1 Mes":
      end.setMonth(today.getMonth() + 1);
      break;
    case "1 Año":
      end.setFullYear(today.getFullYear() + 1);
      break;
    case "All":
    default:
      start = null;
      end = null;
      break;
  }

  return { start, end };
};

export {getFullDate, timeAndDateSort,filterData,calculateDateRange};