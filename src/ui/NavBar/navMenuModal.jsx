import { navData } from "@/lib/data";
import Link from "next/link";
import NavLink from "./navLink";

export default function NavMenuModal({ setModal }) {
  const styles = {
    background:
      "flex items-start p-3 w-screen h-screen bg-slate-400/70 absolute top-0 left-0 z-10",
    modal:
      "flex flex-col items-end ml-auto pt-16 p-4 w-9/12 h-4/6 rounded-lg bg-blue-500/90 z-20 ",
    link: "text-4xl font-bold text-white rounded-lg p-2 m-2",
  };
  return (
    <div className={styles.background} onClick={() => setModal(false)}>
      <nav className={styles.modal}>
        {navData.map((d, k) => {
          return <NavLink title={d.title} path={d.path} key={k} />;
        })}
      </nav>
    </div>
  );
}