import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

const Header = () => {
  const location = useLocation();

  return (
    <nav>
      <Link 
        className={
          location.pathname === "/" ? 
          "link active" : 
          "link"
        } 
        to="/"
      >
        Produtos
      </Link>
      <Link 
        className={
          location.pathname === "/contato" ? 
          "link active" : 
          "link"
        } 
        to="/contato"
      >
        Contato
      </Link>
    </nav>
  );
};

export default Header;
