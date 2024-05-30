"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import NavMenuModal from "./navMenuModal";

export default function NavMenu({ session }) {
  const [modal, setModal] = useState(false);
  const styles = {
    icons: `font-bold ${
      !modal
        ? "text-blue-600 hover:text-blue-700"
        : "text-white hover:text-slate-200"
    } size-10 hover:cursor-pointer z-30 lg:hidden`,
  };
  const noModalStyles = {
    div: "lg:pt-4",
    background: "hidden lg:flex",
    modal: "hidden lg:flex lg:flex-col lg:justify-end",
  };
  return (
    <div className={noModalStyles.div}>
      <FontAwesomeIcon
        icon={faBars}
        className={styles.icons}
        onClick={() => setModal(!modal)}
      />
      {modal ? (
        <NavMenuModal session={session} setModal={setModal} />
      ) : (
        <NavMenuModal
          session={session}
          setModal={setModal}
          nMS={noModalStyles}
        />
      )}
    </div>
  );
}
