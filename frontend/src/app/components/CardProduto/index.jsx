import "./cardProduto.css";

export default function CardProduto({ produto }) {
  return (
    <div className="card h-100 p-3 align-items-center text-center">
      <div className="card-img-container">
        <img
          src={produto.imagem}
          className="card-img-top"
          alt={produto.nome}
        />
      </div>

      <div className="card-infos p-2">
        <h5 className="card-title">{produto.nome}</h5>

        <p className="badge categoria-produto p-2">
          {produto.categoria}
        </p>

        <p className="card-text">
          Preço: <span>R$ {produto.preco}</span>
        </p>

        <a className="btn botao-geral" href={`/catalogo/${produto.id}`}>
          Saiba Mais
        </a>
      </div>
    </div>
  );
}