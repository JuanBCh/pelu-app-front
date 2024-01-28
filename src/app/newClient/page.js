"use client";

import { useState } from "react";
import { addClient } from "@/lib/actions";
import AddClient from "@/ui/addClientForm";
import { useRouter } from "next/navigation";

export default function NewClientPage() {
  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    lastname: "",
    phone: "",
    mail: "",
    birth: "",
  });
  const styles = {
    main: "flex flex-col items-center justify-center",
    title: "mt-16 text-center text-3xl font-bold",
    button:
      "border-black rounded-md py-3 px-6 bg-blue-500 text-white text-4xl hover:bg-blue-600",
  };

  const sendClient = async (e) => {
    e.preventDefault();
    const res = await addClient(data);
    if (res.status === 201) {
      alert("Cliente creado con éxito");
      router.push("/");
    } else {
      alert("Error al crear el cliente");
    }
  };

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Completa los datos del nuevo cliente</h2>
      <AddClient data={data} setData={setData} />
      <button className={styles.button} onClick={(e) => sendClient(e)}>
        Crear
      </button>
    </main>
  );
}
