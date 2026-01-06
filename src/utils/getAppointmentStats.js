export const getAppointmentStats = (dataList) => {
  const today = "2026-01-06"; // Fecha actual

  return dataList.reduce(
    (stats, appointment) => {
      // 1. Contar Atendidas Globales
      if (appointment.isAttended) stats.totalAttended++;

      // 2. Contar Canceladas Globales
      if (appointment.isCancelled) stats.totalCancelled++;

      // 3. Contar Citas de Hoy
      if (appointment.datePatient === today) {
        stats.todayTotal++;

        // Sub-clasificación de hoy (opcional pero útil)
        if (appointment.isCancelled) stats.todayCancelled++;
        if (appointment.isAttended) stats.todayAttended++;
      }

      return stats;
    },
    {
      totalAttended: 0,
      totalCancelled: 0,
      todayTotal: 0,
      todayAttended: 0,
      todayCancelled: 0,
    }
  );
};
