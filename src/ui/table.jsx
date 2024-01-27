import { fetchClients } from "../lib/data";
import ClientSmallCard from "./clientSmallCard";

export default async function Table({ query, currentPage }) {
  const clients = query
    ? await fetchClients(query, currentPage)
    : await fetchClients(null, currentPage);
  const styles = {
    table: "flex flex-wrap justify-around p-1",
  };
  return (
    <div className={styles.table}>
      {clients.map((client) => (
        <ClientSmallCard client={client} />
      ))}
    </div>
  );
}
