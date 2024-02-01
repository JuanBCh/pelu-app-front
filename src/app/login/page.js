"use client";

import { login } from "@/lib/actions";
import Loading from "@/ui/Loading/loading";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({ ci: "", password: "" });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const styles = {
    main: "flex justify-center items-center h-full w-full",
    section:
      "bg-white p-4 w-full rounded-lg shadow-lg flex flex-col items-center",
    title: "text-4xl font-bold mt-16 mb-6 ",
    form: "py-4 divide-y-2 divide-gray-300",
    subsection: "flex flex-col items-center ",
    subtitle: "text-xl font-semibold mt-4",
    aclaration: "block text-xs text-blue-400",
    input:
      "text-xl border-2 border-gray-300 rounded-lg p-2 my-4 shadow-inner text-center",
    submit: `block w-full mt-16 mb-6 text-white text-xl font-bold rounded-lg p-2 my-2 shadow-md bg-${
      error ? "red" : "blue"
    }-500 hover:bg-${
      error ? "red" : "blue"
    }-600 transition-all duration-300 ease-in-out`,
  };

  const manageForm = (e) => {
    setError("");
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addToken = (token) => {
    localStorage.setItem("auth_token", token);
    setLoading(false);
  };

  const sendData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await login(data);

    if (res.status === 200) {
      addToken(res.json.auth_token);
      router.push("/");
    } else if (res.status === 202) {
      addToken(res.json.auth_token);
      router.push("/");
    } else {
      setError(res.json.message);
      setLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.title}>Iniciar Sesion</h1>
        <form className={styles.form} onSubmit={(e) => sendData(e)}>
          <div className={styles.subsection}>
            <label htmlFor="ci" className={styles.subtitle}>
              Cedula de identidad{" "}
              <span className={styles.aclaration}>(sin puntos ni guiones)</span>
            </label>
            <input
              type="text"
              name="ci"
              placeholder=". . . . . . . ."
              className={styles.input}
              onChange={(e) => manageForm(e)}
              value={data.ci}
            />
          </div>
          <div className={styles.subsection}>
            <label htmlFor="password" className={styles.subtitle}>
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className={styles.input}
              onChange={(e) => manageForm(e)}
              value={data.password}
            />
          </div>
          <button type="submit" className={styles.submit}>
            {loading ? <Loading /> : error ? error : "Iniciar Sesion"}
          </button>
        </form>
      </section>
    </main>
  );
}
