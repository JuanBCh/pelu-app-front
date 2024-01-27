"use client";

import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const styles = {
    section: "flex justify-between",
  };
  return (
    <section className={styles.section}>
      <div>Logo</div>
      <nav onClick={() => router.push("/")}>Inicio</nav>
    </section>
  );
}
