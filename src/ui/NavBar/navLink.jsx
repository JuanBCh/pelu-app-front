"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ title, path, session }) {
  const pathName = usePathname();
  const styles = {
    link: "text-3xl lg:text-xl xl:text-2xl font-bold text-white rounded-lg p-2 m-2 lg:-mx-2",
    active: "bg-blue-800 rounded-lg p-2 m-2 lg:-mx-2",
  };
  return (
    <Link
      href={path}
      className={`${styles.link} ${pathName === path && styles.active}`}
    >
      {path === "/login" ? (session ? "Cerrar Sesion" : title) : title}
    </Link>
  );
}
