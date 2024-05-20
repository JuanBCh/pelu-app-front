import Search from "@/ui/search";
import Table from "@/ui/table";

export default async function Home({ searchParams }) {
  const query = searchParams.query || "";
  const currentPage = searchParams.page || 1;
  const styles = {
    main: "mt-9 px-4 w-full",
    h3: "text-4xl lg:text-5xl font-bold",
  };

  return (
    <main className={styles.main}>
      <h3 className={styles.h3}>Clientes</h3>
      <Search placeholder="Buscar..." />
      <Table query={query} currentPage={currentPage} />
    </main>
  );
}
