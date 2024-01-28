export async function fetchClients(query, currentPage) {
  const itemsPerPage = 10;
  const offset = (currentPage - 1) * itemsPerPage;
  const res = await fetch(
    `https://pelu-app-api-alpha.vercel.app/getClients/${query}/${itemsPerPage}/${offset}`,
    { method: "GET", cache: "no-cache" }
  );

  return res.json();
}

export async function fetchOneClient(id) {
  const res = await fetch(
    `https://pelu-app-api-alpha.vercel.app/client/${id}`,
    {
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
