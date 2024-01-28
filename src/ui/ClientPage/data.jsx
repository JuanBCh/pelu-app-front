import { transformToBirthDate } from "@/lib/actions";

export default function ClientData({ client }) {
  const birthdate = transformToBirthDate(client.birth);
  const age = (
    (new Date().getTime() - new Date(client.birth).getTime()) /
    31536000000
  )
    .toFixed(1)
    .split(".")[0];
  const styles = {
    section:
      "mt-6 divide-y-2 shadow-lg rounded-md divide-gray-200 p-2 bg-gray-100",
    info: "flex justify-between mb-1 px-1",
    p: "font-semibold",
    span: "text-lg text-slate-600",
  };
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <p className={styles.p}>Celular:</p>
        <span className={styles.span}>{client.phone}</span>
      </div>
      <div className={styles.info}>
        <p className={styles.p}>Mail:</p>
        <span className={styles.span}>{client.mail}</span>
      </div>
      <div className={styles.info}>
        <p className={styles.p}>Cumpleaños:</p>
        <span className={styles.span}>{birthdate}</span>
      </div>
      <div className={styles.info}>
        <p className={styles.p}>Edad:</p>
        <span className={styles.span}>{age}</span>
      </div>
    </section>
  );
}
