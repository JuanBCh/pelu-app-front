import { fetchOneClient } from "@/lib/actions";
import ClientData from "@/ui/ClientPage/data";
import EditClient from "@/ui/ClientPage/editClient";
import NewTreatment from "@/ui/ClientPage/newTreatmten";
import ClientTreatments from "@/ui/ClientPage/treatments";

export default async function Client({ params }) {
  const id = params.id;
  const client = await fetchOneClient(id);
  const styles = {
    main: "px-4 py-12",
    topDiv: "flex justify-between items-center",
    h1: "text-3xl font-bold text-start",
  };

  return (
    <main className={styles.main}>
      <div className={styles.topDiv}>
        <h1 className={styles.h1}>
          {client.name} {client.lastname}
        </h1>
        <EditClient client={client} />
      </div>
      <ClientData client={client} />
      <NewTreatment clientId={id} />
      <ClientTreatments clientId={id} />
    </main>
  );
}
