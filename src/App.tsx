import React from "react";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects"
import About from "./components/About";

const App: React.FC = () => {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
