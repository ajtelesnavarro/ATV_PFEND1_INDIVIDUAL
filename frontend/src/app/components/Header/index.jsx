
import Link from "next/link";
import "@/app/globals.css";

export default function Header() {
  return (
    <header className="bg-light p-3">
      <nav className="container d-flex justify-content-between align-items-center">
        <Link href="/" className="text-decoration-none text-reset">
          <img
            src="/1.png"
            alt="Logo da Borahae Boutique"
            height="90"
          />
        </Link>

        <div className="navbar-direita d-flex align-items-center gap-3">
          <Link href="/produtos" className="btn botao-geral">
            Produtos
          </Link>

          <Link href="/catalogo" className="btn botao-geral">
            Catálogo
          </Link>
        </div>
      </nav>
    </header>
  );
}
