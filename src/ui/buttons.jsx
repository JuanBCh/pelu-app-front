"use client";

import Link from "next/link";

export function CreateClient() {
  const styles = {
    title:
      "border-black rounded-md p-2 bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out",
  };
  return (
    <Link href="/newClient">
      <span className={styles.title}>Nuevo Cliente</span>
    </Link>
  );
}

export function LagreBlueBTN({ text, color, type }) {
  const styles = `block w-full px-4 py-4 text-xl mt-9 text-white bg-${
    color ? color : "blue"
  }-500 rounded-md hover:bg-${
    color ? color : "blue"
  }-600 transition-all duration-300 ease-in-out`;

  return (
    <button type={type} className={styles}>
      {text}
    </button>
  );
}
