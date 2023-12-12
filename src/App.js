import React from "react"
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Project from "./Routes/Project";
import "./index.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        </Routes>
    </>
  )
}

export default App;
