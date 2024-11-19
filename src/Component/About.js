import React from "react";
import AboutImg from "../image/about.jpg";
import WorkImg from "../image/working.png";
import textImg from "../image/text2-about.svg";
import profileImage from "../image/mainImage.png.jpg";
import "../style/About.css";

const About = () => {
  return (
    <section className="pt-10 pb-10 bg-gray-100 dark:bg-gray-800" id="about">
      <div className="max-w-screen-xl max-md:flex-col mx-auto gap-10 px-5 flex items-center justify-around pt-16 pb-16 ">
        <div className="relative shadow-md">
          <div className="relative rounded-2xl">
            <img
              src={profileImage}
              alt="about-img"
              className="rounded-2xl"
              width={500}
            />
            <span className="absolute bg-black/20 dark:bg-black/40 w-full h-full top-0 left-0 rounded-2xl" />
          </div>
          <img
            src={WorkImg}
            alt="work-img"
            className="absolute bottom-9 right-7 w-12 z-10 max-sm:hidden"
          />
          <span className="bg-white max-sm:hidden">
            <img
              src={textImg}
              alt="text-img"
              className="text absolute w-36  -bottom-4 -right-5 bg-white  rounded-full"
            />
          </span>
        </div>
        <div className="flex flex-col w-1/3 max-md:w-full">
          <span className="text-blue-700 font-semibold mb-2">About Me</span>
          <h4 className="font-bold text-xl dark:text-gray-200">
            Front-end React Developer based in Egypt, Banha
          </h4>
          <p className="text-gray-600 dark:text-gray-500 mb-7 mt-6 font-light leading-6">
            Hey, my name is Omar, and I'm a Frontend Developer. My passion is to
            create and develop a clean UI/UX for my users.
          </p>
          <p className="text-gray-600 dark:text-gray-500  font-light leading-6">
            My main stack currently is React/.js in combination with Tailwind
            CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
