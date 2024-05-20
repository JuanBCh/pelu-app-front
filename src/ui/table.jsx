import { fetchClients } from "../lib/actions";
import ClientSmallCard from "./clientSmallCard";

export default async function Table({ query, currentPage }) {
  const clients = await fetchClients(query, currentPage);
  const styles = {
    table: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 p-1",
  };

  return (
    <div className={styles.table}>
      {clients.map((client, k) => (
        <ClientSmallCard key={k} client={client} />
      ))}
    </div>
  );
}
