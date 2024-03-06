"use client";

import { useEffect, useState } from "react";
import NewTreatmentModal from "./newTreatmentModal";
import { LagreBlueBTN } from "../buttons";

export default function NewTreatment({ clientId }) {
  const [modal, setModal] = useState(false);
  const styles = {
    newTreatment:
      "block w-full px-4 py-4 text-xl mt-9 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out",
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
      <LagreBlueBTN
        text={"Nuevo Tratamiento"}
        className={styles.newTreatment}
        onClick={() => setModal(true)}
      ></LagreBlueBTN>
      {modal && <NewTreatmentModal setModal={setModal} clientId={clientId} />}
    </>
  );
}
