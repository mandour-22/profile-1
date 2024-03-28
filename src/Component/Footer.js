import React from "react";

const Footer = () => {
  const listItem = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <footer className="bg-white" id="footer">
      <div className="w-full mx-auto max-w-screen-xl max-sm:text-center p-4  md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-800 sm:text-center">
          © 2023
          <a href="https://flowbite.com/" className="hover:underline  mx-1">
            Mandour
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap max-sm:justify-center items-center mt-3 text-sm font-medium text-gray-500">
          {listItem.map((item, i) => {
            return (
              <li key={i}>
                <a href={item.link} className="hover:underline me-4 md:me-6">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
