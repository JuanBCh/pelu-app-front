import LoadingScreen from "@/ui/Loading/loadingScreen";
import { Suspense } from "react";

export default function ClientLayout({ children }) {
  return <Suspense fallback={<LoadingScreen />}>{children}</Suspense>;
}
