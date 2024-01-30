"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { CreateClient } from "./buttons";

export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const styles = {
    section: "w-full pr-2 my-6",
    topDiv: "mb-3 h-9 flex justify-between items-center",
    label: "text-xl font-semibold",
    search: "w-full h-16 text-xl border-2 border-slate-500 p-2",
  };

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <section className={styles.section}>
      <div className={styles.topDiv}>
        <label htmlFor="search" className={styles.label}>
          Buscar cliente:
        </label>
        <CreateClient />
      </div>
      <input
        name="search"
        className={styles.search}
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query") || ""}
      ></input>
    </section>
  );
}
