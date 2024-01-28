"use client";

import { useEffect, useState } from "react";
import NewTreatmentModal from "./newTreatmentModal";

export default function NewTreatment({ clientId }) {
  const [modal, setModal] = useState(false);
  const styles = {
    newTreatment:
      "block w-full px-4 py-4 text-xl mt-9 text-white bg-blue-500 rounded-md hover:bg-blue-600",
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modal]);

  return (
    <>
      <button className={styles.newTreatment} onClick={() => setModal(true)}>
        Nuevo Tratamiento
      </button>
      {modal && <NewTreatmentModal setModal={setModal} clientId={clientId} />}
    </>
  );
}
