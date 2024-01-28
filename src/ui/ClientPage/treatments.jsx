import { transformToDate } from "@/lib/actions";
import { fetchTreatments } from "@/lib/data";

export default async function ClientTreatments({ clientId }) {
  const treatments = await fetchTreatments(clientId);
  const styles = {
    section: "mt-6 divide-y-2 shadow-lg rounded-md divide-gray-200 bg-gray-100",
    treatment: "mb-1 py-3 px-2",
    date: "text-xl text-end font-semibold mb-2",
    description: "text-xl text-slate-600",
  };
  return (
    <section className={styles.section}>
      {treatments.map((t, k) => {
        return (
          <div key={k} className={styles.treatment}>
            <h3 className={styles.date}>{transformToDate(t.date)}</h3>
            <p className={styles.description}>{t.treatment}</p>
          </div>
        );
      })}
    </section>
  );
}
