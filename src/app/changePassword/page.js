"use client";

import { changePassword } from "@/lib/actions";
import { useState } from "react";

export default function ChangePassword() {
  const [error, setError] = useState("");
  const styles = {
    main: "flex justify-center items-center h-full w-full",
    section:
      "mt-32 bg-white p-4 w-full rounded-lg shadow-lg flex flex-col items-center",
    form: "py-4 divide-y-2 divide-gray-300",
    subsection: "flex flex-col items-center ",
    subtitle: "text-xl font-semibold mt-4",
    aclaration: "block text-xs text-blue-400",
    input:
      "text-xl border-2 border-gray-300 rounded-lg p-2 my-4 shadow-inner text-center",
    submit: `block w-full mt-5 mb-3 text-white text-xl font-bold rounded-lg p-2 my-2 shadow-md bg-${
      error ? "red" : "blue"
    }-500 hover:bg-${
      error ? "red" : "blue"
    }-600 transition-all duration-300 ease-in-out`,
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <form className={styles.form} action={changePassword}>
          <div name="password" className={styles.subsection}>
            <label htmlFor="password" className={styles.subtitle}>
              Nueva Contraseña
            </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className={styles.input}
            />
          </div>
          <div name="rePassword" className={styles.subsection}>
            <label htmlFor="password" className={styles.subtitle}>
              Repetir Contraseña
            </label>
            <input
              type="password"
              name="rePassword"
              placeholder="********"
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.submit}>
            {error ? error : "Cambiar"}
          </button>
        </form>
      </section>
    </main>
  );
}
