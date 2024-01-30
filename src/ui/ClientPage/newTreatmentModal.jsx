"use client";

import { createTreatment } from "@/lib/actions";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "../Loading/loading";

export default function NewTreatmentModal({ setModal, clientId }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [treatment, setTreatment] = useState({
    clientId: parseInt(clientId),
    date: "",
    description: "",
  });
  const styles = {
    background:
      "flex items-center w-screen h-screen bg-blue-500/50 absolute top-0 left-0 z-10",
    modal:
      "flex flex-col mx-auto p-4 w-11/12 h-5/6 rounded-lg bg-slate-100 z-20 ",
    close:
      "self-end text-red-600 size-9 hover:text-white hover:bg-red-600 hover:cursor-pointer rounded-full",
    title: "mt-4 text-3xl font-semibold text-center text-slate-900",
    form: "flex flex-col h-full py-4 mt-9",
    subtitle: "text-xl",
    date: "flex justify-between items-center mb-9",
    dateSel: "w-3/5 p-4 rounded-md border border-gray-300",
    description: "h-3/5",
    textarea: "mt-4 w-full h-4/5 p-2 border border-gray-300 rounded-md",
    send: `my-auto block w-full px-4 py-4 text-xl text-white rounded-md ${
      !error ? "bg-blue-500 hover:bg-blue-600" : "bg-red-500 hover:bg-red-600"
    }`,
  };

  const manageChange = (e) => {
    setError("");
    setTreatment({ ...treatment, [e.target.name]: e.target.value });
  };

  const sendTreatment = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await createTreatment(treatment);
    if (res.status === 200) {
      router.refresh();
      setModal(false);
      setLoading(false);
    } else {
      setError(res.message);
      setLoading(false);
    }
  };

  return (
    <main className={styles.background}>
      <section className={styles.modal}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={styles.close}
          onClick={() => setModal(false)}
        />
        <h2 className={styles.title}>Crear Tratamiento</h2>
        <form className={styles.form} onSubmit={(e) => sendTreatment(e)}>
          <div className={styles.date}>
            <label className={styles.subtitle} htmlFor="date">
              Fecha:
            </label>
            <input
              className={styles.dateSel}
              onChange={(e) => manageChange(e)}
              value={treatment.date}
              type="date"
              name="date"
            />
          </div>
          <div className={styles.description}>
            <label className={styles.subtitle} htmlFor="description">
              Descripción:
            </label>
            <textarea
              className={styles.textarea}
              onChange={(e) => manageChange(e)}
              value={treatment.description}
              name="description"
            />
          </div>
          <button className={styles.send} type="submit">
            {loading ? <Loading /> : error ? error : "Crear"}
          </button>
        </form>
      </section>
    </main>
  );
}
