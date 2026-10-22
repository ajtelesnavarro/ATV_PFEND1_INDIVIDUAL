
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

//aqui fiz uma função que pega os detalhes do pedido, primeiro colocando oq a url recebem em id e dps criando as variaveis que vao
//ficar os dados
//dps dei um fetch especifico pro id da url e tratei de um erro simples
//dps retornei em formato de json e coloquei dentro de setproduto e dps fiz um catch pra caso o produto nao seja encontrado ou nao tiver o id
export default function DetalhesProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/produtos/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Produto não encontrado");
        }
        return res.json();
      })
      .then((dados) => setProduto(dados))
      .catch(() => setProduto(false));
  }, [id]);

  if (produto === null) {
    return <p className="container py-5">Carregando produto...</p>;
  }

  if (!produto) {
    return <p className="container py-5">Produto não encontrado.</p>;
  }

  return (
    <main className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-12 col-md-6">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-12 col-md-6">
          <h1>{produto.nome}</h1>
          <p>Categoria: {produto.categoria}</p>
          <p>{produto.descricao}</p>

          <h3>
            {Number(produto.preco).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>

          <p>Estoque: {produto.quantidade} unidades</p>
        </div>
      </div>
      <Link href="/catalogo" className="btn btn-outline-secondary mb-4">
        Voltar ao catálogo
      </Link>
    </main>
  );
}
