
import "./cardProduto.css";


export default function CardProduto({ produto }) {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{produto.nome}</h5>
  
          <p className="card-text">
            Categoria: {produto.categoria}
          </p>
  
          <p className="card-text">
            Preço: R$ {produto.preco}
          </p>
  
          <p className="card-text">
            Estoque: {produto.quantidade}
          </p>
  
          <button className="btn btn-primary">
            Saiba Mais
          </button>
        </div>
      </div>
    );
  }
  