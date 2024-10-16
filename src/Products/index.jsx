import React from "react";
import "./style.scss";
import { Context } from "../Context/Context";
import CardProduct from "../CardProduct";
import Header from "../Header";

const Products = () => {
  const { listProducts } = React.useContext(Context);

  if(listProducts.length !== 0) {
    return (
      <div className="products">
        <Header />
        <div className="list">
          {listProducts.map((product, _) => (
            <CardProduct 
            key={product.id} 
            product={product} 
            />
          ))}
        </div>
      </div>
    );
  } else {
    <div>Carregando...</div>
  }
};

export default Products;
