"use client";

import { useState } from "react";
import { addClient } from "@/lib/actions";
import AddClient from "@/ui/addClientForm";
import { useRouter } from "next/navigation";
import Loading from "@/ui/Loading/loading";
import { LagreBlueBTN } from "@/ui/buttons";

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
    topDiv: "w-full h-full flex justify-center items-center mt-16 lg:mt-32",
    main: "flex flex-col items-center justify-center w-full max-w-2xl lg:shadow-lg lg:rounded-lg lg:px-8 lg:py-12",
    title: "text-center text-3xl font-bold",
  };

  const sendClient = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await addClient(data);
    if (res.status === 201) {
      setLoading(false);
      router.push("/");
      router.refresh();
    } else {
      setError(res.message);
      setLoading(false);
    }
  };

  return (
    <div className={styles.topDiv}>
      <main className={styles.main}>
        <h2 className={styles.title}>Completa los datos del nuevo cliente</h2>
        <AddClient data={data} setData={setData} setError={setError} />
        <LagreBlueBTN
          text={loading ? <Loading /> : error ? error : "Crear"}
          onClick={(e) => sendClient(e)}
          color={error ? "red" : "blue"}
        />
      </main>
    </div>
  );
}
