
"use client";

import { useState, useEffect } from "react";

export default function Produtos() {
    //primeiro agnt cria uma variavel pra cada csmpo com o nome e dps com o set, e se ele for array, null ou já pre-selecionado dizer tbm
    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("Álbum");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [idEditando, setIdEditando] = useState(null);
    const [mensagem, setMensagem] = useState("");
    const [imagem, setImagem] = useState("");

    //coloquei o link da api numa variavel pra ficar mais facil se precisar mudar dps
    const API = "http://localhost:3000/api/produtos";

    // aqui ele só vai dar fetch e dps transformar em um json
    //dps se der algum bo ele responde com mensagem
    //e se der outro erro tbm da outra msg
    async function listarProdutos() {
        try {
            const resposta = await fetch(API);

            if (!resposta.ok) {
                throw new Error("Erro ao buscar produtos.");
            }

            const dados = await resposta.json();
            setProdutos(dados);
            setMensagem("");
        } catch (erro) {
            setMensagem(
                "Não foi possível carregar os produtos. Verifique se o servidor está ligado."
            );
        }
    }


    useEffect(() => {
        listarProdutos();
    }, []);

    // aqui eu fiz async pq ele precisa do fetch anterior
    //fiz basicamente a mesma verificação do backend e dps coloquei pra botas os dados da api na variavel produto
    //dps só fiz verificação se tiver erro e etc
    async function salvarProduto(e) {
        e.preventDefault();
        setMensagem("");

        if (
            !nome.trim() ||
            !descricao.trim() ||
            preco === "" ||
            quantidade === "" ||
            Number(preco) < 0 ||
            !Number.isFinite(Number(preco)) ||
            !Number.isInteger(Number(quantidade)) ||
            Number(quantidade) < 0
        ) {
            setMensagem("Preencha os campos corretamente.");
            return;
        }

        const produto = {
            nome,
            categoria,
            descricao,
            preco: Number(preco),
            quantidade: Number(quantidade),
            imagem: imagem
        };

        const resposta = await fetch(
            idEditando ? `${API}/${idEditando}` : API,
            {
                method: idEditando ? "PUT" : "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(produto),
            }
        );

        if (!resposta.ok) {
            setMensagem("Erro ao salvar produto.");
            return;
        }

        setMensagem("Produto salvo com sucesso!");
        limparFormulario();
        listarProdutos();
    }

    // aqui eu peguei o produto que foi clicado e botei os dados dele nas variaveis pra poder editar
    function editarProduto(produto) {
        setIdEditando(produto.id);
        setNome(produto.nome);
        setCategoria(produto.categoria);
        setDescricao(produto.descricao);
        setPreco(produto.preco);
        setQuantidade(produto.quantidade);
        setImagem(produto.imagem);
    }

    // aqui eu queria fazer aquela telinha de confirmação, mas não sabia fazer ent pesquisei pra ver se eu conseguia e era bem facil na vdd
    //dps peguei a api no "modo" delete que basicamente ja faz tudo sozinho e so botei o id que eu queria
    async function excluirProduto(id) {
        if (!confirm("Deseja excluir este produto?")) return;

        const resposta = await fetch(`${API}/${id}`, {
            method: "DELETE",
        });

        if (!resposta.ok) {
            setMensagem("Erro ao excluir produto.");
            return;
        }

        setMensagem("Produto excluído com sucesso!");
        listarProdutos();
    }

    // só mudei as variaveis pra null pra limpar o formulario
    function limparFormulario() {
        setNome("");
        setCategoria("Álbum");
        setDescricao("");
        setPreco("");
        setQuantidade("");
        setIdEditando(null);
    }

    return (
        <main className="container py-4">
            <h1>Gerenciar Produtos</h1>
            <p>Cadastre, edite e exclua os produtos da Borahae Boutique.</p>

            {mensagem && <p>{mensagem}</p>}

            <form onSubmit={salvarProduto} className="card card-body mb-4">
                <h2 className="h4">
                    {idEditando ? "Editar produto" : "Cadastrar produto"}
                </h2>

                <label className="form-label">Nome</label>
                <input
                    className="form-control mb-3"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    //aqui tive real que pesquisar pq aparentemente não é a msm coisa que o placeholder ent tive que
                    //pedir ajuda pro gpt :< NAO ME MATA PFV EU TENTEI FAZER SEM, fiz isso pra todos os label/input
                    required
                />

                <label className="form-label">Categoria</label>
                <select
                    className="form-select mb-3"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option>Álbum</option>
                    <option>Lightstick</option>
                    <option>Pelúcia</option>
                    <option>Photocard</option>
                </select>

                <label className="form-label">Descrição</label>
                <textarea
                    className="form-control mb-3"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                />

                <label className="form-label">Preço (R$)</label>
                <input
                    type="number"
                    min="0"
                    step="0.01"
                    className="form-control mb-3"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    required
                />

                <label className="form-label">Quantidade em estoque</label>
                <input
                    type="number"
                    min="0"
                    step="1"
                    className="form-control mb-3"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    required
                />

                <label className="form-label">Imagem (Em URL)</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    value={preco}
                    onChange={(e) => setImagem(e.target.value)}
                />

                {/* como eu queria que fosse algo bem rapido sem mts paginas coloquei esse ngc de ser ou salvar alterações ou cadastrar o produto*/}
                {/*pq acho que fica mt mais bonito visualmente e tava nas minhas prioridades pra aprender como moldar o site pra preferencia do*/}
                {/*usuário ent tive que pesquisar pra saber como era o passo-a-passo correto que tinha que fazer*/}
                <button className="btn botao-geral" type="submit">
                    {idEditando ? "Salvar alterações" : "Cadastrar produto"}
                </button>

                {idEditando && (
                    <button
                        className="btn btn-secondary mt-2 botao-geral"
                        type="button"
                        onClick={limparFormulario}
                    >
                        Cancelar edição
                    </button>
                )}
            </form>

            <h2 className="h4">Produtos cadastrados</h2>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Preço</th>
                            <th>Estoque</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {produtos.map((produto) => (
                            <tr key={produto.id}>
                                <td>{produto.nome}</td>
                                <td>{produto.categoria}</td>
                                <td>R$ {Number(produto.preco).toFixed(2)}</td>

                                {/* aqui eu so fiz um charmezinho pra mostrar se está abaixo de 10 rsrs */}
                                <td>
                                    {produto.quantidade < 10 ? (
                                        <p>Estoque baixo: 
                                        <span className="badge text-bg-danger">
                                             {produto.quantidade} unidades
                                        </span></p>
                                    ) : (
                                        <p> Estoque normal: 
                                        <span className="badge text-bg-success">
                                         {produto.quantidade} unidades
                                        </span></p>
                                    )}
                                </td>

                                <td>
                                    <button
                                        className="btn btn-sm botao-geral me-2 mb-1"
                                        onClick={() => editarProduto(produto)}
                                    >
                                        Editar
                                    </button>

                                    <button
                                        className="btn btn-sm botao-geral mb-1"
                                        onClick={() => excluirProduto(produto.id)}
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}