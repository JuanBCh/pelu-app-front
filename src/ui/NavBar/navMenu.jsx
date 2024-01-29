"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import NavMenuModal from "./navMenuModal";

export default function NavMenu() {
  const [modal, setModal] = useState(false);
  const styles = {
    icons: `font-bold ${
      !modal
        ? "text-blue-600 hover:text-blue-700"
        : "text-white hover:text-slate-200"
    } size-10 hover:cursor-pointer z-30`,
  };
  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        className={styles.icons}
        onClick={() => setModal(!modal)}
      />
      {modal && <NavMenuModal setModal={setModal} />}
    </>
  );
}
