import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/ui/NavBar/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Peluqueria Mariana Peinados",
  description: "Creada por Juan Bagnasco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-3`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
