import Link from "next/link";

export function CreateClient() {
  return (
    <Link href="/newClient">
      <span>Nuevo Cliente</span>
    </Link>
  );
}
