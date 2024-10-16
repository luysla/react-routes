import React from "react";
import ContactImg from "../assets/img/contato.jpg";
import "./style.scss";
import Header from "../Header";

const Contact = () => {
  return (
    <div className="contact">
      <Header />
      <div className="content">
        <img src={ContactImg} />
        <div className="text">
          <h1>Entre em contato.</h1>
          <div className="info">
            <div className="detail"></div>
            <span>dyana@email.com</span>
          </div>
          <div className="info">
            <div className="detail"></div>
            <span>(84) 99999-9999</span>
          </div>
          <div className="info">
            <div className="detail"></div>
            <span>Rua dos alfeneiros</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
