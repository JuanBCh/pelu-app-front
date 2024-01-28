"use client";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteTreatmentModal from "./deleteTreatmentModal";
import { useEffect, useState } from "react";
import { transformToDate } from "@/lib/actions";

export default function DeleteTreatment({ treatmentId, date }) {
  const [modal, setModal] = useState(false);
  const styles = {
    delete: "text-red-600 size-7",
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
    <div>
      <FontAwesomeIcon
        icon={faTrash}
        className={styles.delete}
        onClick={() => setModal(!modal)}
      />
      {modal && (
        <DeleteTreatmentModal
          treatmentId={treatmentId}
          date={transformToDate(date)}
          setModal={setModal}
        />
      )}
    </div>
  );
}