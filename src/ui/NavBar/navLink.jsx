"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ title, path }) {
  const pathName = usePathname();
  const styles = {
    link: "text-3xl font-bold text-white rounded-lg p-2 m-2",
    active: "text-blue-600 bg-white rounded-lg p-2 m-2",
  };
  return (
    <Link
      href={path}
      className={`${styles.link} ${pathName === path && styles.active}`}
    >
      {title}
    </Link>
  );
}
