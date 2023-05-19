import React from "react";
import "./about.css";
import photo from "../../assets/images/photo.png"

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
      <div className="content_profil">
        <div className="content_name">
          <div className="content_download">
            <h2>Benjamin EKIA MOUANGA</h2>
            <button className="content_btn">Download here CV</button>
          </div>
        </div>
        <div className="content_photo">
          <img src={photo} className="content_img"  height="100%"/>
        </div>
      </div>
    </div>
  );
};

export default About;
