import React from "react";
import "./about.css";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";

const About = () => {
  return (
    <div className="container_about">
      <div className="content_about">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi pariatur
          ad optio numquam porro nam hic corporis error, nesciunt voluptatum
          doloremque officia libero perspiciatis, deleniti voluptas sapiente
          modi explicabo beatae? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eligendi consectetur blanditiis earum unde laborum,
          molestias eum commodi similique accusamus. Tempore rerum maxime
          quaerat laboriosam hic, ipsum possimus. Dolor, iste illo! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Et quia eveniet ducimus
          neque cum. Nam blanditiis excepturi velit, modi minus, accusamus ex
          illo incidunt animi dolorem exercitationem, provident rem quo? ABOUT
        </p>
      </div>
      <div className="content_elements">
        <div>
          <h3>Web Développeur Frontend</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            beatae recusandae fuga sequi accusantium deleniti quibusdam nihil
            repudiandae eum alias, molestias eligendi reprehenderit earum. At
            labore deserunt dignissimos asperiores in. Inventore dolores
            perspiciatis labore atque vitae tenetur,
          </p>
        </div>
        <div>
          <h3>Web Développeur Backend</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            beatae recusandae fuga sequi accusantium deleniti quibusdam nihil
            repudiandae eum alias, molestias eligendi reprehenderit earum. At
            labore deserunt dignissimos asperiores in. Inventore dolores
            perspiciatis labore atque vitae tenetur,
          </p>
        </div>
        <div>
          <h3>Web Développeur Designer UX | UI</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            beatae recusandae fuga sequi accusantium deleniti quibusdam nihil
            repudiandae eum alias, molestias eligendi reprehenderit earum. At
            labore deserunt dignissimos asperiores in. Inventore dolores
            perspiciatis labore atque vitae tenetur,
          </p>
        </div>
      </div>
      <div className="content_profil">
        <div className="content_download">
          <button className="content_btn">Download my resume</button>
        </div>
        <div className="content_iconfa">
          <SiGmail className="si_fa1" />
          <SiGithub className="si_fa2" />
          <SiLinkedin className="si_fa3" />
        </div>
      </div>
    </div>
  );
};

export default About;
