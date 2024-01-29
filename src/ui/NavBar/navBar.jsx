"use client";

import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import NavMenu from "./navMenu";

export default function NavBar() {
  const router = useRouter();
  const styles = {
    section: "flex justify-between p-2",
    icons:
      "font-bold text-blue-600 size-10 hover:text-blue-700 hover:cursor-pointer",
  };
  return (
    <nav className={styles.section}>
      <FontAwesomeIcon
        icon={faHouse}
        className={styles.icons}
        onClick={() => router.push("/")}
      />
      <NavMenu />
    </nav>
  );
}
