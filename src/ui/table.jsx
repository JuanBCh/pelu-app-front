import { fetchClients } from "../lib/data";
import ClientSmallCard from "./clientSmallCard";

export default async function Table({ query, currentPage }) {
  const clients = query
    ? await fetchClients(query, currentPage)
    : await fetchClients(null, currentPage);
  const styles = {
    table: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 p-1",
  };
  console.log(clients);
  return (
    <div className={styles.table}>
      {clients.map((client) => (
        <ClientSmallCard client={client} />
      ))}
    </div>
  );
}
