import Search from "@/ui/search";
import Table from "@/ui/table";

export default function Home({ searchParams }) {
  const query = searchParams.query || "";
  const currentPage = searchParams.page || 1;
  const styles = {
    main: "mt-9",
    h3: "text-4xl font-bold",
  };

  return (
    <main className={styles.main}>
      <h3 className={styles.h3}>Clientes</h3>
      <Search placeholder="Buscar..." />
      <Table query={query} currentPage={currentPage} />
    </main>
  );
}
