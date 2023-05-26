import React from "react";
import "./home.css";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import picture from "../../assets/images/photo.png";

const Home = () => {
  return (
    <div className="home_container">
      <div className="content_home">
        <div className="content_left">
          <h2>Home</h2>
          <h3>Benjamin EKIA MOUANGA</h3>
          <h4>Web Développeur FullStack & Web Designer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            pariatur ad optio numquam porro nam hic corporis error, nesciunt
            voluptatum doloremque officia libero perspiciatis, deleniti voluptas
            sapiente modi explicabo beatae? HOME
          </p>
          <button className="btn_home">Say Hello</button>
        </div>
        <div className="content_right">
          <img src={picture} className="content_img"   />
        </div>
      </div>
      <div className="content_icon">
        <SiGmail className="si_fa1" />
        <SiGithub className="si_fa2" />
        <SiLinkedin className="si_fa3" />
      </div>
    </div>
  );
};

export default Home;
