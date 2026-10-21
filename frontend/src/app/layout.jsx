
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Borahae Boutique",
  description: "Feito de ARMY, para ARMY.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
