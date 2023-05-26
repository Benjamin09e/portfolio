import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Benjamin EKIA MOUANGA</h1>
      </div>
      <div className="navlikns">
        <NavLink to="/home" className="home">
          Home
        </NavLink>
        <NavLink to="/about" className="about">
          About
        </NavLink>
        <NavLink to="/more" className="more">
          Services
        </NavLink>
        <NavLink to="/skills" className="skills">
          Skills
        </NavLink>
        <NavLink to="/contact" className="contact">
          Contact
        </NavLink>
      </div>
      <div className="fa_menu">
        <SiGmail className="si_fa1" />
        <SiGithub className="si_fa2" />
        <SiLinkedin className="si_fa3" />
      </div>
    </div>
  );
};

export default Header;
