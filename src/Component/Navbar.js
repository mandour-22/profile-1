import {
  faBars,
  faMonument,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);
  const [mode, setMode] = useState(
    !localStorage.getItem("theme") ? "dark" : localStorage.getItem("theme")
  );

  const HTMLElement = document.documentElement;

  const listItem = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const handlerShow = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    if (window.scrollY >= 0) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    switch (mode) {
      case "dark":
        HTMLElement.classList.add("dark");
        HTMLElement.classList.remove("light");
        break;
      case "light":
        HTMLElement.classList.remove("dark");
        HTMLElement.classList.add("light");
        break;
      default:
        break;
    }
  }, [mode]);

  return (
    <nav
      className={`${
        fixedNav ? "fixed w-full top-0 z-50" : "z-0 relative"
      } bg-white border-gray-200 shadow-md dark:bg-gray-800 dark:text-white`}>
      <div
        className={` max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:gap-4`}>
        <a className="cursor-pointer flex-1" onClick={scrollToTop}>
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Mandour
          </span>
        </a>
        <button
          className="mr-4 cursor-pointer"
          onClick={() => {
            localStorage.setItem("theme", mode === "dark" ? "light" : "dark");
            setMode(mode === "dark" ? "light" : "dark");
            HTMLElement.classList.add(mode);
          }}>
          {mode === "dark" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={handlerShow}>
          <FontAwesomeIcon className="text-2xl" icon={faBars} />
        </button>
        <div
          className={`${
            showMenu ? "show" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default">
          <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4 border-2  border-gray-300 dark:border-gray-500 rounded-lg md:bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-200 dark:bg-gray-800">
            {listItem.map((item, i) => (
              <li
                key={i}
                onClick={() => {
                  setShowMenu(false);
                }}>
                <a
                  href={item.link}
                  className="block py-2 px-3 text-gray-700 dark:text-gray-300 dark:hover:bg-transparent dark:hover:text-white hover:text-white transition-all md:hover:bg-white hover:bg-blue-600 md:hover:text-blue-600 font-semibold rounded md:bg-transparent  md:p-0 "
                  aria-current="page">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
