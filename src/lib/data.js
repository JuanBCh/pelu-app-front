export async function fetchClients(query, currentPage) {
  const itemsPerPage = 10;
  const offset = (currentPage - 1) * itemsPerPage;
  console.log(offset);
  const res = await fetch(
    `http://localhost:8080/getClients/${query}/${itemsPerPage}/${offset}`,
    { method: "GET", cache: "no-cache" }
  );

  return res.json();
}
