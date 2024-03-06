export const navData = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Nuevo Cliente",
    path: "/newClient",
  },
  {
    title: "Iniciar Sesion",
    path: "/login",
  },
];

export async function fetchClients(query, currentPage) {
  const itemsPerPage = 10;
  const offset = (currentPage - 1) * itemsPerPage;
  const res = await fetch(
    `http:localhost:8080/getClients/${query}/${itemsPerPage}/${offset}`,
    {
      method: "GET",
      headers: {
        auth_token: "token",
      },
      cache: "no-cache",
    }
  );

  return res.json();
}

export async function fetchOneClient(id) {
  const res = await fetch(
    `https://pelu-app-api-alpha.vercel.app/client/${id}`,
    {
      headers: {
        auth_token: "",
      },
      cache: "no-cache",
    }
  );
  return res.json();
}

export async function fetchTreatments(id) {
  const res = await fetch(
    `https://pelu-app-api-alpha.vercel.app/clientTreatments/${id}`,
    {
      cache: "no-cache",
    }
  );
  return res.json();
}
