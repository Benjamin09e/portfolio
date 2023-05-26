import React from "react";
import "./contact.css";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="container_contact">
      <div className="content_contact">
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi pariatur
          ad optio numquam porro nam hic corporis error, nesciunt voluptatum
          doloremque officia libero perspiciatis, deleniti voluptas sapiente
          modi explicabo beatae? CONTACT
        </p>
      </div>
      <div className="contact_parent">
        <div className="contact_info">
          <div className="container_info">
            <div className="contact_info_top">
              <h3>Contact Information</h3>
              <p>Say something to start a live chat!</p>
            </div>
            <div className="contact_info_main">
              <div className="contactfa_icons">
                <BsTelephoneFill />
                <p>+33 7 49 99 86 07</p>
              </div>
              <div className="contactfa_icons">
                <HiOutlineEnvelope />
                <p>ekiabenjamin@gmail.com</p>
              </div>
              <div className="contactfa_icons">
                <MdLocationOn />
                <p>Saint-Etienne, 42100</p>
              </div>
            </div>
            <div className="contact_info_bottom">
              <SiGmail className="si_fa1" />
              <SiGithub className="si_fa2" />
              <SiLinkedin className="si_fa3" />
            </div>
          </div>
        </div>
        <div className="contact_form">
          <form action="">
            <div className="form_content">
              <div className="form_left">
                <div className="left_content">
                  <label htmlFor="">First Name</label>
                  <input type="text" placeholder="|" className="input_content" />
                </div>
                <div className="left_content">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    placeholder="|"
                    className="input_content"
                  />
                </div>
              </div>
              <div className="form_right">
                <div className="right_content">
                  <label htmlFor="">Last Name</label>
                  <input type="text" placeholder="|" className="input_content" />
                </div>
                <div className="right_content">
                  <label htmlFor="">Phone Number</label>
                  <input type="text" placeholder="|" className="input_content" />
                </div>
              </div>
            </div>
            <div className="form_aera">
              <label htmlFor="">Write your message...</label>
              <input type="text" className="input_content" />
            </div>
            <div className="form_btn">
              <button className="btn_send">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
