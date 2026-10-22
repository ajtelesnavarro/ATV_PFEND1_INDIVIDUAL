
"use client";

import { useEffect, useState } from "react";
import CardProduto from "../components/CardProduto";

export default function Catalogo() {
  //primeiro eu pego todas as varaveis que eu vou precisar, como os produtos, categorias, se ta carregando (esse eu tive que pesquisar)
  //(pq o meu tava dando erro sem esse), e o de erro
    const [produtos, setProdutos] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    //aqui peguei a api
    const API = "http://localhost:3000/api/produtos";

    //aqui eu fiz um effect que try pegar a api e se nao der responde, dps ela trasnforma em json
    //e se nao for uma array tbm responde e se der outro erro ele tbm responde, e no final ele seta carregando como false
    useEffect(() => {
        async function buscarProdutos() {
            try {
                const resposta = await fetch(API);

                if (!resposta.ok) {
                    throw new Error("Não foi possível carregar os produtos.");
                }

                const dados = await resposta.json();

                if (!Array.isArray(dados)) {
                    throw new Error("A API retornou dados inválidos.");
                }

                setProdutos(dados);
            } catch (erro) {
                setErro(
                    "Não foi possível carregar o catálogo. Verifique se o servidor está ligado."
                );
            } finally {
                setCarregando(false);
            }
        }

        buscarProdutos();
    }, []);

    //bom aqui ele so pega as categorias e filtra os produtos de acordo com a categoria selecionada, se for todas ele mostra todos
    const categorias = [
        ...new Set(produtos.map((produto) => produto.categoria)),
    ];

    //aqui ele filtra os produtos de acordo com a categoria selecionada, se for todas ele mostra todos
    const produtosFiltrados =
        categoriaSelecionada === "Todas"
            ? produtos
            : produtos.filter(
                  (produto) => produto.categoria === categoriaSelecionada
              );

    return (
        <main className="container py-5">
            <h1 className="text-center mb-4">Nosso Catálogo</h1>

            <div className="mb-4">
                <label htmlFor="filtro-categoria" className="form-label">
                    Filtrar por categoria
                </label>

                <select
                    id="filtro-categoria"
                    className="form-select"
                    value={categoriaSelecionada}
                    onChange={(e) => setCategoriaSelecionada(e.target.value)}
                >
                    <option value="Todas">Todas as categorias</option>

                    {/* map basico pra pegar todas as categorias */}
                    {categorias.map((categoria) => (
                        <option key={categoria} value={categoria}>
                            {categoria}
                        </option>
                    ))}
                </select>
            </div>


            {/* aqui se der bo ja tem mensagem de erro */}
            {carregando && <p>Carregando produtos...</p>}

            {!carregando && erro && (
                <div className="alert alert-danger" role="alert">
                    {erro}
                </div>
            )}

            {!carregando && !erro && produtosFiltrados.length === 0 && (
                <p className="text-center">
                    Nenhum produto encontrado nesta categoria.
                </p>
            )}


            {/* e se nada der errado, ou seja tudo certo ai ele mostra os produtos filtrados, e se nao tiver nenhum produto ele mostra a mensagem de nenhum produto encontrado */}
            {!carregando && !erro && produtosFiltrados.length > 0 && (
                <div className="row">
                    {produtosFiltrados.map((produto) => (
                        <div
                            className="col-12 col-sm-6 col-lg-4 mb-4"
                            key={produto.id}
                        >
                            <CardProduto produto={produto} />
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}
