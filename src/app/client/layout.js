import Loading from "@/ui/Loading/loading";
import { Suspense } from "react";

export default function ClientLayout({ children }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
