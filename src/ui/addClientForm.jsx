import { addClient } from "@/lib/actions";
import { LagreBlueBTN } from "./buttons";

export default function AddClient() {
  const styles = {
    form: "w-full max-w-2xl flex flex-col items-center justify-center my-12",
    simpleInputs:
      "w-11/12 text-2xl border-2 border-slate-500 rounded mb-3 px-2 py-3",
    birth: "flex justify-between items-center w-11/12 text-xl mb-3",
    date: "border-2 border-slate-500 rounded px-2 py-3",
  };

  return (
    <form className={styles.form} action={addClient}>
      <input
        name="name"
        type="text"
        className={styles.simpleInputs}
        placeholder="Nombre"
      />
      <input
        name="lastname"
        type="text"
        className={styles.simpleInputs}
        placeholder="Apellido"
      />
      <input
        name="phone"
        type="text"
        className={styles.simpleInputs}
        placeholder="Teléfono"
      />
      <input
        name="mail"
        type="text"
        className={styles.simpleInputs}
        placeholder="Email"
      />
      <div name="birth" className={styles.birth}>
        <label className="text-2xl" htmlFor="birth">
          Nacimiento:
        </label>
        <input name="birth" type="date" className={styles.date} />
      </div>
      <button>Crear</button>
    </form>
  );
}
