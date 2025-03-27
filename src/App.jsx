import React from "react";
import Home from "./Pages/Home";
import Shop from "./pages/Shop";
import Ourstory from "./pages/Ourstory";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./Style/Home.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Ourstory" element={<Ourstory />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
