export default function AddClient({ data, setData, setError }) {
  const styles = {
    form: "w-full flex flex-col items-center justify-center my-12",
    simpleInputs:
      "w-11/12 text-2xl border-2 border-slate-500 rounded mb-3 px-2 py-3",
    birth: "flex justify-between items-center w-11/12 text-xl mb-3",
    date: "border-2 border-slate-500 rounded px-2 py-3",
  };

  const handleData = (e) => {
    if (e.target.name === "name" || e.target.name === "lastname") setError("");
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form className={styles.form}>
      <input
        name="name"
        type="text"
        className={styles.simpleInputs}
        placeholder="Nombre"
        onChange={(e) => handleData(e)}
        value={data.name}
      />
      <input
        name="lastname"
        type="text"
        className={styles.simpleInputs}
        placeholder="Apellido"
        onChange={(e) => handleData(e)}
        value={data.lastname}
      />
      <input
        name="phone"
        type="text"
        className={styles.simpleInputs}
        placeholder="Teléfono"
        onChange={(e) => handleData(e)}
        value={data.phone}
      />
      <input
        name="mail"
        type="text"
        className={styles.simpleInputs}
        placeholder="Email"
        onChange={(e) => handleData(e)}
        value={data.mail}
      />
      <div className={styles.birth}>
        <label className="text-2xl" htmlFor="birth">
          Nacimiento:
        </label>
        <input
          name="birth"
          type="date"
          className={styles.date}
          onChange={(e) => handleData(e)}
          value={data.birth}
        />
      </div>
    </form>
  );
}
