import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);

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

  return (
    <nav
      className={`${
        fixedNav ? "fixed w-full top-0 z-50" : "z-0 relative"
      } bg-white border-gray-200 shadow-md`}>
      <div
        className={`   max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`}>
        <a className="flex-grow-1">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Mandour
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
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
          <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4 border-2  border-gray-300 rounded-lg md:bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-200 ">
            {" "}
            {listItem.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="block py-2 px-3 text-gray-700 hover:text-white transition-all md:hover:bg-white hover:bg-blue-600 md:hover:text-blue-600 font-semibold rounded md:bg-transparent  md:p-0 "
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
