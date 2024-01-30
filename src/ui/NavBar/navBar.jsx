"use client";

import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import NavMenu from "./navMenu";

export default function NavBar() {
  const router = useRouter();
  const styles = {
    section:
      "flex justify-between p-2 lg:flex-col lg:justify-start lg:h-screen lg:w-1/6 lg:bg-blue-600 lg:-ml-3 lg:-mt-3 lg:mr-5 lg:p-5 lg:divide-y-2",
    icons:
      "font-bold text-blue-600 size-10 hover:text-blue-700 hover:cursor-pointer lg:text-white lg:hover:text-slate-300 lg:mb-4",
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
