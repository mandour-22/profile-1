import React, { useState } from "react";
import NavBar from "../Component/Navbar";
import Hero from "../Component/Hero";
import About from "../Component/About";
import Project from "../Component/Project";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setShow(false);
  };

  const scroll = () => {
    const scrollEvent = () => {
      if (window.scrollY >= 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", scrollEvent);
  };

  window.onload = () => {
    scroll();
  };

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
      <div
        className={`${
          show
            ? "bottom-4 opacity-100 max-sm:opacity-75"
            : "-bottom-10 opacity-0 max-sm:opacity-75"
        } fixed  right-3 bg-gray-300 dark:bg-gray-700 w-8 h-8 text-center leading-8 max-sm:bg-opacity-75 hover:bg-gray-200 rounded-full text-blue-500 hover:text-blue-600 cursor-pointer`}
        onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </>
  );
};

export default Home;
