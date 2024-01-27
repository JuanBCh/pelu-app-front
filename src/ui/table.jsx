import { fetchClients } from "../lib/data";

export default async function Table({ query, currentPage }) {
  const clients = query
    ? await fetchClients(query, currentPage)
    : await fetchClients(null, currentPage);
  const styles = {
    table: "flex flex-wrap justify-around p-1",
    client: "w-5/12 h-32 p-3 my-3 shadow-md flex flex-col",
    name: "text-lg",
    lastname: "text-2xl font-semibold",
    phone: "mt-auto text-slate-500",
  };
  return (
    <div className={styles.table}>
      {clients.map((client) => (
        <div className={styles.client} key={client.id}>
          <p className={styles.lastname}>{client.lastname},</p>
          <p className={styles.name}>{client.name}</p>
          <p className={styles.phone}>{client.phone}</p>
        </div>
      ))}
    </div>
  );
}
