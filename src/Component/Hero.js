import React from "react";
import "../style/Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Html from "../image/html-5.png";
import Css from "../image/css-3.png";
import js from "../image/js.png";
import react from "../image/react.jpeg";
import tailwind from "../image/tailwindcss.png";

const Hero = () => {
  const list = [
    { id: 1, image: Html, alt: "HTML5" },
    { id: 2, image: Css, alt: "CSS3" },
    { id: 3, image: js, alt: "Javascript" },
    { id: 4, image: react, alt: "react" },
    { id: 5, image: tailwind, alt: "tailwind CSS" },
  ];
  return (
    <header
      className="flex items-center flex-col h-screen justify-center relative max-sm:pt-32"
      id="home">
      <div className="max-w-screen-xl mt-5 mb-5 mx-auto flex max-sm:flex-col-reverse max-sm:justify-center items-center px-6 gap-5">
        <div className="flex-col md:w-1/3 lg:w-1/2 w-full">
          <h1 className="mb-4 text-xl md:text-2xl  max-sm:text-center leading-6 font-semibold tracking-tight text-gray-900 lg:text-6xl ">
            Front-End React Developer👨‍💻
          </h1>
          <p className="text-lg font-normal leading-7 max-sm:w-full max-sm:text-center text-gray-500 lg:text-xl mt-5 mb-5 ">
            Hi, I'm
            <span className="underline font-medium  mx-3 underline-offset-3 text-gray-600 decoration-2 decoration-blue-400 ">
              Omar Mandour
            </span>
            A passionate Front-end React Developer based in Egypt, Banha
          </p>
          <div className="max-sm:text-center max-sm:mt-4 max-sm:mb-6">
            <a
              href="https://github.com/mandour-22"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-3xl mx-1 text-gray-700"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/omar-mandour-61253625b/"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-3xl mx-2 text-gray-700"
              />
            </a>
          </div>
        </div>
        <div className="md:w-1/3 w-full mx-auto">
          <div className="hero-img mx-auto" />
        </div>
      </div>

      <div className="flex max-sm:flex-col md:items-center justify-between mb-10">
        <h3 className="font-bold text-gray-700">
          Tech Stack{" "}
          <span className="ml-3 mr-5 font-bold text-gray-400">|</span>
        </h3>
        <div className="flex items-center">
          {list.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.alt}
              width={30}
              height={30}
              className="mx-3 mt-3 mb-3 md:mt-0 rounded"
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;
