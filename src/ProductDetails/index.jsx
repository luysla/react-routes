import React from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context/Context";
import Header from "../Header";
import "./style.scss";

const ProductDetails = () => {
  const { listProducts } = React.useContext(Context);
  const { id } = useParams();
  const product = listProducts.filter(product => product.id === id)[0];

  if(listProducts.length !== 0) {
    return (
      <div className="wrapper">
        <Header />
        <div className="details">
          <img src={product.fotos[0].src} />
          <div className="text">
            <h2 className="title">{product.nome}</h2>
            <span className="priceTag">R$ {product.preco}</span>
            <p className="description">{product.descricao}</p>
          </div>
        </div>
        { product.fotos.length > 1 && <img src={product.fotos[1].src} />}
      </div>
    )
  }
}

export default ProductDetails;
