import Link from "next/link";

export function CreateClient() {
  const styles = {
    title:
      "border-black border-2 rounded-md p-2 bg-blue-500 text-white hover:font-semibold",
  };
  return (
    <Link href="/newClient">
      <span className={styles.title}>Nuevo Cliente</span>
    </Link>
  );
}
