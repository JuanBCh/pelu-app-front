import AddClient from "@/ui/addClientForm";

export default function NewClientPage() {
  const styles = {
    topDiv: "w-full h-full flex justify-center items-center mt-16 lg:mt-32",
    main: "flex flex-col items-center justify-center w-full max-w-2xl lg:shadow-lg lg:rounded-lg lg:px-8 lg:py-12",
    title: "text-center text-3xl font-bold",
  };

  return (
    <div className={styles.topDiv}>
      <main className={styles.main}>
        <h2 className={styles.title}>Completa los datos del nuevo cliente</h2>
        <AddClient />
      </main>
    </div>
  );
}
