import { registerClient } from "@/lib/actions";

export default function RegisterClientPage() {
  return (
    <div>
      <form action={registerClient}>
        <input type="text" placeholder="Nombre" name="name" />
        <input type="text" placeholder="Apellido" name="lastname" />
        <input type="number" placeholder="Telefono" name="phone" />
        <input type="email" placeholder="Email" name="mail" />
        <input type="date" placeholder="Fecha de nacimiento" name="birth" />
        <button>Crear</button>
      </form>
    </div>
  );
}
