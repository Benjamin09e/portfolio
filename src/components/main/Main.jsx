import React from 'react'
import "./main.css"
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import More from "../../pages/service/More";
import Skills from "../../pages/skills/Skills";
import Contact from "../../pages/contact/Contact";

const Main = () => {
  return (
    <div className='main'>
      <div className="App_routes">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/more" element={<More />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default Main