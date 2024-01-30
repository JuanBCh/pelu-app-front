"use client";

import { useState } from "react";
import { addClient } from "@/lib/actions";
import AddClient from "@/ui/addClientForm";
import { useRouter } from "next/navigation";
import Loading from "@/ui/Loading/loading";

export default function NewClientPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
    button: `my-auto block w-11/12 px-4 py-4 text-4xl text-white rounded-md ${
      !error ? "bg-blue-500 hover:bg-blue-600" : "bg-red-500 hover:bg-red-600"
    }`,
  };

  const sendClient = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await addClient(data);
    if (res.status === 201) {
      alert("Cliente creado con éxito");
      setLoading(false);
      router.push("/");
      router.refresh();
    } else {
      setError(res.message);
      setLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Completa los datos del nuevo cliente</h2>
      <AddClient data={data} setData={setData} setError={setError} />
      <button className={styles.button} onClick={(e) => sendClient(e)}>
        {loading ? <Loading /> : error ? error : "Crear"}
      </button>
    </main>
  );
}
