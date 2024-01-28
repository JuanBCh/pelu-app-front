import Link from "next/link";

export function CreateClient() {
  const styles = {
    title:
      "border-black rounded-md p-2 bg-blue-500 text-white hover:bg-blue-600",
  };
  return (
    <Link href="/newClient">
      <span className={styles.title}>Nuevo Cliente</span>
    </Link>
  );
}
