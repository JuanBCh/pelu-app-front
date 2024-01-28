import { fetchOneClient } from "@/lib/data";
import ClientData from "@/ui/ClientPage/data";
import NewTreatment from "@/ui/ClientPage/newTreatmten";
import ClientTreatments from "@/ui/ClientPage/treatments";

export default async function Client({ params }) {
  const id = params.id;
  const client = await fetchOneClient(id);
  const styles = {
    main: "px-4 py-12",
    h1: "text-3xl font-bold text-center",
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>
        {client.name} {client.lastname}
      </h1>
      <ClientData client={client} />
      <NewTreatment clientId={id} />
      <ClientTreatments clientId={id} />
    </main>
  );
}
