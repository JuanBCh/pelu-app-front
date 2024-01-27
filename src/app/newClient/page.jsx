"use client";

import { useState } from "react";
import { addClient } from "../lib/actions";
import { useRouter } from "next/navigation";

export default function NewClientPage() {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    lastname: "",
    phone: "",
    mail: "",
    birth: "",
  });

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addClient = async (e) => {
    e.preventDefault();
    if (!data.name || !data.lastname) {
      return "El nombre y apellido son obligatorios";
    }

    const res = await fetch("http://localhost:8080/addClient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 201) {
      router.refresh();
      router.replace("/");
    }
  };

  return (
    <form onSubmit={(e) => addClient(e)}>
      <input
        name="name"
        type="text"
        placeholder="Nombre"
        onChange={(e) => handleData(e)}
        value={data.name}
      />
      <input
        name="lastname"
        type="text"
        placeholder="Apellido"
        onChange={(e) => handleData(e)}
        value={data.lastname}
      />
      <input
        name="phone"
        type="text"
        placeholder="Teléfono"
        onChange={(e) => handleData(e)}
        value={data.phone}
      />
      <input
        name="mail"
        type="text"
        placeholder="Email"
        onChange={(e) => handleData(e)}
        value={data.mail}
      />
      <input
        name="birth"
        type="date"
        placeholder="Cumpleaños"
        onChange={(e) => handleData(e)}
        value={data.birth}
      />
      <button type="submit">Crear</button>
    </form>
  );
}
