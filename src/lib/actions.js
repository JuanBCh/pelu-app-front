export const addClient = async (data) => {
  if (!data.name || !data.lastname) {
    return "El nombre y apellido son obligatorios";
  }

  const res = await fetch("http://localhost:8080/addClient", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  return res;
};

export const transformToBirthDate = (date) => {
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
  const day = date.split("-")[2].split("T")[0];
  const month = date.split("-")[1];
  const year = date.split("-")[0];

  return day + "/" + month + "/" + year;
};

export const createTreatment = async (data) => {
  if (!data.date || !data.description) {
    return "La fecha y descripción son obligatorios";
  }
  const res = await fetch("http://localhost:8080/addTreatment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  return res;
};
