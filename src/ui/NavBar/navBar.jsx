export default function NavBar() {
  const styles = {
    section: "flex justify-between",
  };
  return (
    <section className={styles.section}>
      <div>Logo</div>
      <nav>Inicio</nav>
    </section>
  );
}
