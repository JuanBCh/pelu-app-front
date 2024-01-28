"use client";

import { deleteTreatment } from "@/lib/actions";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function DeleteTreatmentModal({ treatmentId, date, setModal }) {
  const router = useRouter();
  const styles = {
    background:
      "flex items-center w-screen h-screen bg-red-500/50 absolute top-0 left-0 z-10",
    modal:
      "flex flex-col justify-around mx-auto p-4 w-11/12 h-2/6 rounded-lg bg-slate-100 z-20 ",
    title: "mt-6 text-3xl font-semibold text-center text-slate-900",
    buttons: "w-full flex justify-around items-center mt-9",
    xmark:
      "size-20 text-red-600 shadow-xl rounded-full bg-white p-2 hover:cursor-pointer hover:bg-red-600 hover:text-white",
    check:
      "size-20 text-green-600 shadow-xl rounded-full bg-white p-2 hover:cursor-pointer hover:bg-green-600 hover:text-white",
  };

  const aceptDelete = async (e) => {
    e.preventDefault();
    const res = await deleteTreatment(treatmentId);
    if (res.status === 200) {
      router.refresh();
      setModal(false);
    }
  };

  return (
    <main className={styles.background}>
      <section className={styles.modal}>
        <h2 className={styles.title}>Eliminar tratamiento del {date}?</h2>
        <div className={styles.buttons}>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.xmark}
            onClick={() => setModal(false)}
          />
          <FontAwesomeIcon
            icon={faCheck}
            className={styles.check}
            onClick={(e) => aceptDelete(e)}
          />
        </div>
      </section>
    </main>
  );
}
