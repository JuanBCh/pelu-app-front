//CLIENT ACTIONS

export const addClient = async (data) => {
  if (!data.name || !data.lastname) {
    const res = {
      status: 400,
      message: "El nombre y apellido son obligatorios",
    };
    return res;
  }

  const res = await fetch("https://pelu-app-api-alpha.vercel.app/addClient", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  return res;
};

export const editClient = async (data) => {
  if (
    !data.name &&
    !data.lastname &&
    !data.phone &&
    !data.mail &&
    !data.birth
  ) {
    const res = {
      status: 400,
      message: "Tienes que editar al menos un campo",
    };
    return res;
  }

  const res = await fetch(
    `https://pelu-app-api-alpha.vercel.app/updateClient/${data.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return res;
};

export const deleteClient = async (id) => {
  const res = await fetch(
    `https://pelu-app-api-alpha.vercel.app/deleteClient/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    }
  );

  return res;
};

//TREATMENT ACTIONS

export const createTreatment = async (data) => {
  if (!data.date || !data.description) {
    const res = {
      status: 400,
      message: "La fecha y descripción son obligatorios",
    };
    return res;
  }
  const res = await fetch(
    "https://pelu-app-api-alpha.vercel.app/addTreatment",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return res;
};

export const deleteTreatment = async (id) => {
  const res = await fetch(
    `https://pelu-app-api-alpha.vercel.app/deleteTreatment/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    }
  );

  return res;
};

//USER ACTIONS

export const login = async (data) => {
  if (!data.ci || !data.password) {
    const res = {
      status: 400,
      json: {
        message: "La cedula y contraseña son obligatorios",
      },
    };
    return res;
  }

  const res = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  const response = {
    status: res.status,
    json: await res.json(),
  };
  return response;
};

export const changePassword = async (newPass) => {
  if (newPass.length < 8) {
    const res = {
      status: 400,
      json: {
        message: "Debe ingresar una contraseña de al menos 8 caracteres",
      },
    };
    return res;
  }
  const res = await fetch("http://localhost:8080/changePassword", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      auth_token: localStorage.getItem("auth_token"),
    },
    body: JSON.stringify({
      newPass: newPass,
    }),
  });

  const response = {
    status: res.status,
    json: await res.json(),
  };
  return response;
};
