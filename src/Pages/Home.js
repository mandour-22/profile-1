import React from "react";
import NavBar from "../Component/Navbar";
import Hero from "../Component/Hero";
import About from "../Component/About";
import Project from "../Component/Project";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer";
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
