import React from "react";
import "./footer.css";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer">
        <div className="company">
          <h3>Company</h3>
          <p>Advity.net</p>
          <p>Criscomagency.com</p>
          <p>monho.tech</p>
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
            <input
              type="text"
              className="form_input"
              placeholder="Enter your email"
            />
            <input type="button" value="Envoyer" className="form_btn" />
          </form>
        </div>
      </div>
      <div className="title_container">
        <div className="highlight">
          <div className="content_flex">
            <p>Copyright © 2023 </p>
            <SiGmail className="si_fa1" />
            <SiGithub className="si_fa2" />
            <SiLinkedin className="si_fa3"/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
