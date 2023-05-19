import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer">
        <div className="company">
          <h3>Company</h3>
          <p>Advity.net</p>
          <p>Criscomagency.com</p>
          <p>monhotech.net</p>
        </div>
        <div className="resource">
          <h3>Resources</h3>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
        </div>
        <div className="product">
          <h3>Product</h3>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
        </div>
        <div className="name">
          <h2>Benjamin EKIA MOUANGA</h2>
          <form action="" className="form">
            <input type="text" className="form_input" placeholder="Enter your email" />
            <input type="button" value="Envoyer" className="form_btn" />
          </form>
        </div>
      </div>
      <div className="title_container">
        <div className="highlight">
          <p>Copyright 2023 ....</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
