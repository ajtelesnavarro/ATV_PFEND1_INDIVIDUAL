
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CardProduto from "../components/CardProduto";

export default function Catalogo() {
    //aqui so importei oq precisva no caso os produtos
  const [produtos, setProdutos] = useState([]);

  //aqui fiz o fetch na minha api, botei em json e dps em setprodutos
  useEffect(() => {
    fetch("http://localhost:3000/api/produtos")
      .then((res) => res.json())
      .then((dados) => setProdutos(dados));
  }, []);

  return (
    // agr eu só retornei com um map simples mesmo 
    <main className="container py-5">
      <h1 className="text-center mb-4">Nosso Catálogo</h1>

      <div className="row">
        {produtos.map((produto) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={produto.id}>
            <CardProduto produto={produto} />
          </div>
        ))}
      </div>
    </main>
  );
}
