"use client";

import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import EditClientModal from "./editClientModal";

export default function EditClient({ client }) {
  const [modal, setModal] = useState(false);
  const styles = {
    edit: "size-12 text-blue-500 hover:text-blue-600 transition-all duration-300 ease-in-out hover:cursor-pointer",
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
      <FontAwesomeIcon
        icon={faUserPen}
        className={styles.edit}
        onClick={() => setModal(true)}
      />
      {modal && <EditClientModal setModal={setModal} client={client} />}
    </>
  );
}
