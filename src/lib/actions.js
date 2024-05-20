"use server";

import { revalidatePath } from "next/cache";
import { redirect, useRouter } from "next/navigation";
import { createTreatmentSchema, transformURL } from "./utils";
import pool from "@/utils/postgres";
import { auth, signIn, signOut } from "./auth";
import bcrypt from "bcrypt";
const saltRounds = 10;

//CLIENT ACTIONS

export const fetchClients = async (query, currentPage) => {
  const itemsPerPage = 10;
  const offset = (currentPage - 1) * itemsPerPage;

  try {
    const db = await pool.connect();
    const clients = await db.query(
      `SELECT id, name, lastname, phone, mail, birth, user_name 
      FROM users
      WHERE
      name ILIKE $1 OR
      lastname ILIKE $1 OR
      phone ILIKE $1 OR
      mail ILIKE $1 OR
      user_name ILIKE $1
      LIMIT ${itemsPerPage} OFFSET ${offset}`,
      [`%${query}%`]
    );

    db.release();
    return clients.rows;
  } catch (err) {
    console.log("Error fetching data", err);
    throw err;
  }
};

export const fetchOneClient = async (id) => {
  try {
    const db = await pool.connect();
    const client = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    db.release();
    return client.rows[0];
  } catch (err) {
    console.log("Error fetching data", err);
    throw err;
  }
};

export const addClient = async (formData) => {
  let { name, lastname, phone, mail, birth } = Object.fromEntries(formData);
  if (birth === "") {
    birth = null;
  }

  try {
    const db = await pool.connect();
    const result = await db.query(
      "INSERT INTO users (name, lastname, phone, mail, birth, user_name) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, lastname, phone, mail, birth, name + lastname]
    );

    db.release();

    revalidatePath("/");
    redirect("/");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const editClient = async (formData) => {
  let { id, name, lastname, phone, mail, birth } = Object.fromEntries(formData);

  if (birth === "") {
    birth = null;
  }
  if (name === "") {
    name = null;
  }
  if (lastname === "") {
    lastname = null;
  }
  if (phone === "") {
    phone = null;
  }
  if (mail === "") {
    mail = null;
  }
  if (!name && !lastname && !phone && !mail && !birth) {
    const res = {
      status: 400,
      message: "Tienes que editar al menos un campo",
    };
    return res;
  }

  const db = await pool.connect();

  // Quiero hacer una query que solo actualice los valores dados, no todos
  const res = await db.query(
    `UPDATE users
    SET name = COALESCE($1, name),
    lastname = COALESCE($2, lastname),
    phone = COALESCE($3, phone),
    mail = COALESCE($4, mail),
    birth = COALESCE($5, birth)
    WHERE id = $6
    RETURNING *`,
    [name, lastname, phone, mail, birth, id]
  );

  db.release();

  revalidatePath(`/client/${id}`);
  redirect(`/client/${id}`);
};

export const deleteClient = async (id) => {
  const db = await pool.connect();
  const res = await db.query("DELETE FROM users WHERE id = $1", [id]);
  db.release();

  if (res) {
    revalidatePath("/");
    redirect("/");
  } else return;
};

//TREATMENT ACTIONS

export const fetchTreatments = async (id) => {
  try {
    const db = await pool.connect();
    const res = await db.query(
      "SELECT * FROM treatments WHERE client_id = $1",
      [id]
    );

    db.release();

    return res.rows;
  } catch (err) {
    console.log("Error fetching data", err);
    throw err;
  }
};

export const createTreatment = async (formData) => {
  const treatment = createTreatmentSchema();

  const { clientId, date, description } = treatment.parse({
    clientId: formData.get("clientId"),
    date: formData.get("date"),
    description: formData.get("description"),
  });

  if (!date || !description) return;

  const db = await pool.connect();
  const res = await db.query(
    "INSERT INTO treatments (client_id, date, treatment) VALUES ($1, $2, $3) RETURNING *",
    [clientId, date, description]
  );

  db.release();

  if (res.rows.length > 0) {
    revalidatePath(`/client/${clientId}`);
    redirect(`/client/${clientId}`);
  } else return;
};

export const deleteTreatment = async (id, clientId) => {
  const db = await pool.connect();
  const res = await db.query("DELETE FROM treatments WHERE id = $1", [id]);
  db.release();
  if (res) {
    revalidatePath(`/client/${clientId}`);
    redirect(`/client/${clientId}`);
  } else return;
};

//USER ACTIONS

export const login = async (formData) => {
  "use server";
  const { user_name, password } = Object.fromEntries(formData);

  await signIn("credentials", { user_name, password });
};

export const logout = async () => {
  "use server";
  await signOut();
};

export const changePassword = async (formData) => {
  const { password, rePassword } = Object.fromEntries(formData);
  if (password !== rePassword) return "Las contraseñas no coinciden";
  if (password.length < 8) {
    return "La contraseña debe tener al menos 8 caracteres";
  }

  const db = await pool.connect();
  const session = await auth();
  const userId = session.user.id;

  bcrypt.hash(password, saltRounds, async function (err, hash) {
    if (err) {
      console.log(err);
      return;
    } else {
      const res = await db.query(
        "UPDATE users SET password = $1 WHERE id = $2",
        [hash, userId]
      );
    }
  });
  db.release();
  revalidatePath("/");
  redirect("/");
};
