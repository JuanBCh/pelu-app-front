"use client";

import { useRouter } from "next/navigation";

export default function ClientSmallCard({ client }) {
  const router = useRouter();
  const redirect = (id) => {
    router.push(`/client/${id}`);
  };
  const styles = {
    client: "w-5/12 h-32 p-3 my-3 shadow-md flex flex-col",
    name: "text-lg",
    lastname: "text-2xl font-semibold",
    phone: "mt-auto text-slate-500",
  };
  return (
    <div
      className={styles.client}
      key={client.id}
      onClick={() => redirect(client.id)}
    >
      <p className={styles.lastname}>{client.lastname},</p>
      <p className={styles.name}>{client.name}</p>
      <p className={styles.phone}>{client.phone}</p>
    </div>
  );
}
