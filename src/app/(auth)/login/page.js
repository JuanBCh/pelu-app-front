import { login, logout } from "@/lib/actions";
import { auth, signOut } from "@/lib/auth";

export default async function Login() {
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
    submit: `block w-full mt-16 mb-6 text-white text-xl font-bold rounded-lg p-2 my-2 shadow-md bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out`,
  };

  const session = await auth();

  return (
    <main className={styles.main}>
      {!session ? (
        <section className={styles.section}>
          <h1 className={styles.title}>Iniciar Sesion</h1>
          <form className={styles.form} action={login}>
            <div className={styles.subsection}>
              <label htmlFor="ci" className={styles.subtitle}>
                Nombre de usuario{" "}
                <span className={styles.aclaration}>
                  (Tu nombre y apellido sin espacios)
                </span>
              </label>
              <input
                type="text"
                name="user_name"
                placeholder=". . . . . . . ."
                className={styles.input}
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
              />
            </div>
            <button type="submit" className={styles.submit}>
              Iniciar Sesion
            </button>
          </form>
        </section>
      ) : (
        <form action={logout}>
          <button type="submit" className={styles.submit}>
            Cerrar Sesion
          </button>
        </form>
      )}
    </main>
  );
}
