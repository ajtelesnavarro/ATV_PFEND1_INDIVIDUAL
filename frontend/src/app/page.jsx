
"use client";

import { useState, useEffect } from "react";
import CardProduto from "./components/CardProduto";
import "./globals.css";

export default function Home() {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [msgErro, setMsgErro] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/produtos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao buscar produtos");
        }

        return res.json();
      })
      .then((data) => {
        console.log("Resposta da API:", data);
        console.log("É uma lista?", Array.isArray(data));

        setListaProdutos(
          Array.isArray(data) ? data : data.produtos ?? data.products ?? []
        );

        setMsgErro("");
      })
      .catch((error) => setMsgErro(error.message));
  }, []);

  return (
    <main>
      {/* Banner inicial */}




      {/* Banner inicial */}
      <section className="container-fluid py-5 text-center fundo-banner">
        <div className="container">

          <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
            <img src="/2.png" height="90" alt="Decoração" />
            <img src="/3.png" height="120" alt="Decoração" />
          </div>

          <h1 className="fw-bold titulo-banner">
            Seu cantinho roxo
          </h1>

          <p className="lead">
            Encontre seus produtos favoritos do BTS!
          </p>

          <a href="#produtos" className="btn botao-geral">
            Ver produtos
          </a>

        </div>
      </section>



      {/* Produtos vindos do backend */}
      <section id="produtos" className="container py-4">
        <h2 className="mb-4">Nossos mais vendidos</h2>

        {msgErro && (
          <p className="text-danger">{msgErro}</p>
        )}

        {/* aqui tive que pesquisar como limitava o map! */}
        <div className="row">
          {listaProdutos.slice(0, 6).map((produto) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={produto.id}>
              <CardProduto produto={produto} />
            </div>
          ))}
        </div>

        {!msgErro && listaProdutos.length === 0 && (
          <p>Carregando produtos...</p>
        )}
      </section>
    </main>
  );
}
