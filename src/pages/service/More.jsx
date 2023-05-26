import React from "react";
import "./services.css";
import { BsCodeSlash } from "react-icons/bs";
import { ImPencil2 } from "react-icons/im";
import { RiCloudWindyFill } from "react-icons/ri";
import { TbBrand4Chan } from "react-icons/tb";


const More = () => {
  return (
    <div className="container_more">
      <div className="content_more">
        <h2>Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi pariatur
          ad optio numquam porro nam hic corporis error, nesciunt voluptatum
          doloremque officia libero perspiciatis, deleniti voluptas sapiente
          modi explicabo beatae? SERVICES
        </p>
      </div>
      <div className="more_links">
        <h4>ALL.</h4>
        <h4>Web.</h4>
        <h4>Branding.</h4>
        <h4>UI | UX.</h4>
        <h4>Web Hosting.</h4>
      </div>
      <div className="more_elements">
        <div >
          <BsCodeSlash className="more_fa"/>
          <p className="more_p">
            Web développeur
          </p>
        </div>
        <div >
          <ImPencil2 className="more_fa"/>
          <p className="more_p">
            Web Designer
          </p>
        </div>
        <div >
          <TbBrand4Chan className="more_fa" />
          <p className="more_p">
            Branding
          </p>
        </div>
        <div >
          <RiCloudWindyFill className="more_fa"/>
          <p className="more_p">
            Web Hosting
          </p>
        </div>
      </div>
    </div>
  );
};

export default More;
