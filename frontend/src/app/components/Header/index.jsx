
import Link from "next/link";
import "@/app/globals.css";

export default function Header() {
  return (
    <header className="bg-light p-3">
      <nav className="container d-flex justify-content-between align-items-center">
        <img
          src="/1.png"
          alt="Logo da Borahae Boutique"
          height="90"
        />

        <div className="navbar-direita d-flex align-items-center gap-3">
          <Link href="/produtos" className="btn btn-primary">
            Produtos
          </Link>

          <Link href="/sobrenos" className="btn btn-primary">
            Sobre Nós
          </Link>
        </div>
      </nav>
    </header>
  );
}
