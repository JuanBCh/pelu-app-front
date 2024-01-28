"use client";

import { useState } from "react";
import NewTreatmentModal from "./newTreatmentModal";

export default function NewTreatment({ clientId }) {
  const [modal, setModal] = useState(false);
  const styles = {
    newTreatment:
      "block w-full px-4 py-4 text-xl mt-9 text-white bg-blue-500 rounded-md hover:bg-blue-600",
  };
  return (
    <>
      <button className={styles.newTreatment} onClick={() => setModal(!modal)}>
        Nuevo Tratamiento
      </button>
      {modal && <NewTreatmentModal setModal={setModal} clientId={clientId} />}
    </>
  );
}
