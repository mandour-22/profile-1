import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <section
      className="relative pt-6 pb-6 mt-16 mb-16 bg-gray-100"
      id="contact">
      <div className="max-w-screen-xl mx-auto flex flex-col item-center p-4">
        <p className="text-blue-600 text-3xl font-bold mb-2 max-sm:text-center">
          Contact Me
        </p>
        <h2 className="text-2xl font-bold max-sm:text-center ">
          You can contact me through
        </h2>
        <div className="flex items-center max-sm:flex-col gap-8 mt-10">
          <div className="bg-gray-200 shadow-sm w-2/3 max-sm:w-full p-5">
            <span className="">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-blue-500 text-2xl"
              />
            </span>
            <h4 className="text-2xl mt-3 mb-3 pr-10 font-semibold text-gray-800">
              Email me
            </h4>
            <a
              href="mailto: omarhassa321@gamil.com"
              className="text-blue-500 hover:text-blue-700 hover:underline cursor-pointer">
              omarhassa321@gamil.com
            </a>
          </div>
          <div className="bg-gray-200 shadow-sm w-2/3 max-sm:w-full p-5">
            <span className="">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-blue-500 text-2xl"
              />
            </span>
            <h4 className="text-2xl mt-3 mb-3 pr-10 font-semibold text-gray-800">
              Call Me
            </h4>
            <a className="text-blue-500 hover:text-blue-700 hover:underline cursor-pointer">
              +201003083969
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
