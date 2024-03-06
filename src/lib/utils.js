export const transformToBirthDate = (date) => {
  if (!date) return;
  const monthsToSpanish = {
    "01": "Enero",
    "02": "Febrero",
    "03": "Marzo",
    "04": "Abril",
    "05": "Mayo",
    "06": "Junio",
    "07": "Julio",
    "08": "Agosto",
    "09": "Septiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre",
  };
  const day = date.split("-")[2].split("T")[0];
  const month = monthsToSpanish[date.split("-")[1]];
  const year = date.split("-")[0];

  return day + " de " + month + ` (${year})`;
};

export const transformToDate = (date) => {
  if (!date) return;
  const day = date.split("-")[2].split("T")[0];
  const month = date.split("-")[1];
  const year = date.split("-")[0];

  return day + "/" + month + "/" + year;
};
