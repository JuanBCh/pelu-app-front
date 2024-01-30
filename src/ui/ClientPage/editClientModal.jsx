"use client";

import { deleteClient, editClient } from "@/lib/actions";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "../Loading/loading";

export default function EditClientModal({ setModal, client }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    id: client.id,
    name: "",
    lastname: "",
    phone: "",
    mail: "",
    birth: "",
  });
  const [del, setDel] = useState(false);
  const styles = {
    background:
      "flex items-center w-screen h-screen bg-blue-500/50 absolute top-0 left-0 z-10",
    modal:
      "flex flex-col justify-around mx-auto p-4 w-11/12 h-auto rounded-lg bg-slate-100 z-20 ",
    topDiv: "w-full flex justify-between items-center",
    icons: "text-red-600 size-9 hover:cursor-pointer rounded-full",
    title: "mt-6 text-3xl font-semibold text-center text-slate-900",
    form: "flex flex-col h-full py-4 mt-9",
    subtitle: "text-xl",
    div: "flex justify-between items-center mb-9",
    input: "w-3/5 p-4 rounded-md border border-gray-300 text-end",
    send: `my-auto block w-full px-4 py-4 text-xl text-white rounded-md ${
      !error ? "bg-blue-500 hover:bg-blue-600" : "bg-red-500 hover:bg-red-600"
    }`,
    delete: `${
      !error
        ? "bg-orange-500 hover:bg-orange-600"
        : "bg-red-500 hover:bg-red-600"
    } text-white`,
  };

  const manageData = (e) => {
    setError("");
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const manageDelete = () => {
    setError("");
    setDel(!del);
  };

  const sendData = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!del) {
      const res = await editClient(data);
      if (res.status === 202) {
        router.refresh();
        setModal(false);
        setLoading(false);
      } else {
        setError(res.message);
        setLoading(false);
      }
    } else if (del) {
      const res = await deleteClient(data.id);
      if (res.status === 200) {
        router.push("/");
      } else {
        console.log(res);
      }
    }
  };
  return (
    <main className={styles.background}>
      <section className={styles.modal}>
        <div className={styles.topDiv}>
          {!del ? (
            <FontAwesomeIcon
              icon={faUserSlash}
              className={styles.icons}
              onClick={() => manageDelete()}
            />
          ) : (
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={styles.icons}
              onClick={() => manageDelete()}
            />
          )}
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={styles.icons}
            onClick={() => setModal(false)}
          />
        </div>
        <h2 className={styles.title}>Editar perfil de {client.name}</h2>
        <form className={styles.form} onSubmit={(e) => sendData(e)}>
          <div className={styles.div}>
            <label className={styles.subtitle} htmlFor="name">
              Nombre:
            </label>
            <input
              className={styles.input}
              placeholder={client.name}
              onChange={(e) => manageData(e)}
              value={data.name}
              type="text"
              name="name"
            />
          </div>
          <div className={styles.div}>
            <label className={styles.subtitle} htmlFor="lastname">
              Apellido:
            </label>
            <input
              className={styles.input}
              placeholder={client.lastname}
              onChange={(e) => manageData(e)}
              value={data.lastname}
              type="text"
              name="lastname"
            />
          </div>
          <div className={styles.div}>
            <label className={styles.subtitle} htmlFor="phone">
              Telefono:
            </label>
            <input
              className={styles.input}
              placeholder={client.phone}
              onChange={(e) => manageData(e)}
              value={data.phone}
              type="number"
              name="phone"
            />
          </div>
          <div className={styles.div}>
            <label className={styles.subtitle} htmlFor="mail">
              Mail:
            </label>
            <input
              className={styles.input}
              placeholder={client.mail}
              onChange={(e) => manageData(e)}
              value={data.mail}
              type="email"
              name="mail"
            />
          </div>
          <div className={styles.div}>
            <label className={styles.subtitle} htmlFor="birth">
              Nacimiento:
            </label>
            <input
              className={styles.input}
              placeholder={client.birth}
              onChange={(e) => manageData(e)}
              value={data.birth}
              type="date"
              name="birth"
            />
          </div>
          <button
            className={`${styles.send} ${del && styles.delete}`}
            type="submit"
          >
            {loading ? (
              <Loading />
            ) : error ? (
              error
            ) : !del ? (
              "Aceptar"
            ) : (
              "Borrar"
            )}
          </button>
        </form>
      </section>
    </main>
  );
}
