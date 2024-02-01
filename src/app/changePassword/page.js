"use client";

import { changePassword } from "@/lib/actions";
import Loading from "@/ui/Loading/loading";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ChangePassword() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
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

  const manageForm = (e) => {
    setError("");
    setNewPassword(e.target.value);
  };

  const sendData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await changePassword(newPassword);
    if (res.status === 202) {
      setLoading(false);
      router.push("/");
    } else {
      setLoading(false);
      setError(res.json.message);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <form className={styles.form} onSubmit={(e) => sendData(e)}>
          <div className={styles.subsection}>
            <label htmlFor="password" className={styles.subtitle}>
              Nueva Contraseña
            </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className={styles.input}
              onChange={(e) => manageForm(e)}
              value={newPassword}
            />
          </div>
          <button type="submit" className={styles.submit}>
            {loading ? <Loading /> : error ? error : "Cambiar"}
          </button>
        </form>
      </section>
    </main>
  );
}
