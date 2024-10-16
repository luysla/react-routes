import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const CardProduct = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="card" 
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.fotos[0].src} />
      <p>{product.nome}</p>
    </div>
  )
}

export default CardProduct;
