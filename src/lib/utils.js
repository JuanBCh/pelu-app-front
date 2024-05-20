import { z } from "zod";

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
  const day = date.getDate();
  const month = monthsToSpanish[date.getMonth() + 1];
  const year = date.getFullYear();

  return day + " de " + month + ` (${year})`;
};

export const transformToDate = (date) => {
  if (!date) return;
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return day + "/" + month + "/" + year;
};

export const createTreatmentSchema = () => {
  const schema = z.object({
    clientId: z.coerce.number(),
    date: z.string(),
    description: z.string(),
  });

  return schema;
};

export const editClientSchema = () => {
  const schema = z.object({
    id: z.coerce.number(),
    name: z.string(),
    lastname: z.string(),
    birth: z.string(),
    phone: z.string(),
    mail: z.string(),
  });

  return schema;
};
