export async function fetchClients(query, currentPage) {
  const itemsPerPage = 10;
  const offset = (currentPage - 1) * itemsPerPage;
  const res = await fetch(
    `http://localhost:8080/getClients/${query}/${itemsPerPage}/${offset}`,
    { method: "GET", cache: "no-cache" }
  );

  return res.json();
}

export async function fetchOneClient(id) {
  const res = await fetch(`http://localhost:8080/client/${id}`);
  return res.json();
}
