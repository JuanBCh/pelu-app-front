import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/ui/NavBar/navBar";
import { Suspense } from "react";
import LoadingScreen from "@/ui/Loading/loadingScreen";
import Loading from "@/ui/Loading/loading";
import { auth } from "@/lib/auth.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Peluqueria Mariana Peinados",
  description: "Creada por Juan Bagnasco",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${inter.className} p-3 lg:flex`}>
        <Suspense fallback={<Loading />}>
          <NavBar session={session} />
        </Suspense>
        <div className="lg:w-full lg:h-full lg:mx-28">
          <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
        </div>
      </body>
    </html>
  );
}
