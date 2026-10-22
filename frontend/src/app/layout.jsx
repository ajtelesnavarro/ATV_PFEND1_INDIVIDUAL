import { Italianno, Cormorant_Garamond, Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italianno",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Borahae Boutique | BTS Store",
  description: "Feito de ARMY, para ARMY.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${italianno.variable} ${cormorant.variable} ${poppins.variable}`}>
        <Header />

        <div className="conteudo-principal">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
