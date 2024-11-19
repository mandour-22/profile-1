import React from "react";

const Project = () => {
  return (
    <div
      className="py-10 bg-white dark:bg-gray-900 border-b dark:border-gray-800 max-sm:px-4"
      id="projects">
      <div className="max-w-screen-xl flex flex-col mx-auto ">
        <h1 className="text-5xl text-gray-900 dark:text-white font-semibold mt-4 mb-7 ">
          Some Provider {""}
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-6xl">
            Project
          </span>
        </h1>
        <ol className="relative border-s border-gray-200 dark:border-gray-700 px-4">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-[6.6px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              July 2024
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              ECommerce
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              A modern e-commerce platform built with React, TypeScript, and
              Redux Toolkit, featuring secure authentication, wishlist
              management, and a dynamic shopping cart. Enhanced with Redux
              Persist, Axios, React Router DOM, React Bootstrap, and React Hook
              Form for a seamless and responsive user experience.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-[6.6px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2024
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quran Islamic
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              A comprehensive Islamic application featuring sections for Hadith,
              Quran, Dhikr and Duas, and Donations. Built with React, React
              Router DOM, Tailwind CSS, Fetch API, and Moment.js, it offers a
              clean, user-friendly interface with precise date and time handling
              for spiritual guidance and charitable contributions.
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-[6.6px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              December 2023
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Cruds App
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              A dynamic CRUD application built with HTML, CSS, and JavaScript,
              featuring a search functionality for easy data retrieval. The
              project allows users to create, read, update, and delete records,
              all within a clean and responsive interface.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Project;
