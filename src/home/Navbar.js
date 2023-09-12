import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import DarkMode from "../js/DarkMode";
import logo from "../assets/images/logo.svg";

const Navbar = (prop) => {
  const [isClicked, setIsClicked] = useState(false);
  const svgCode = `
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" style="fill: rgba(29, 155, 240, 1); transform: none; msFilter: none;">
      <path d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z"></path>
    </svg>
  `;
  const hamburgerClicked = () => {
    setIsClicked((prevState) => {
      return !prevState;
    });
  };
  return (
    <Fragment>
      <nav className="flex items-center justify-between w-full h-20 pl-6 pr-6 text-base dark:text-gray-300 z-30 lg:pr-20">
        {/* Logo and Name */}
        <div className="flex items-center justify-center space-x-0 h-24 z-50">
          <img
            src={logo}
            alt=""
            className={`${
              (prop.darkModeSwitch || isClicked) && "invert-color"
            } w-11`}
          />
          <div className="flex flex-col -space-y-2">
            <div className="flex w-56 items-center space-x-1">
              <div
                className={`${
                  isClicked && "text-white lg:text-black"
                } text-lg font-semibold dark:font-medium`}
              >
                Ralphy Caraan
              </div>
              <span dangerouslySetInnerHTML={{ __html: svgCode }}></span>
            </div>
            <div
              className={`${
                isClicked && "text-white lg:text-black"
              } text-normal font-medium`}
            >
              Web Developer
            </div>
          </div>
        </div>
        {/* Menu */}
        <div className="flex items-center justify-end space-x-12">
          <div className="hidden font-semibold lg:flex lg:space-x-12 dark:font-normal">
            <div className="group">
              <Link
                to="/"
                className="group-hover:text-bluish dark:group-hover:text-light menu-link"
              >
                Home
              </Link>
            </div>
            <div className="group">
              <Link
                to="about"
                className="group-hover:text-bluish dark:group-hover:text-light menu-link"
              >
                About
              </Link>
            </div>
            <div className="group">
              <Link
                to="projects"
                className="group-hover:text-bluish dark:group-hover:text-light menu-link"
              >
                Projects
              </Link>
            </div>
            <div className="group">
              <Link
                to="experience"
                className="group-hover:text-bluish dark:group-hover:text-light menu-link"
              >
                Experience
              </Link>
            </div>
            <div className="group">
              <Link
                to="contact"
                className="group-hover:text-bluish dark:group-hover:text-light menu-link"
              >
                Contacts
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <DarkMode
              clickedDarkMode={prop.setDarkMode}
              darkModeSwitch={prop.darkModeSwitch}
            />
          </div>
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button
            id="menu-btn"
            type="button"
            className={`${
              isClicked && "open"
            } z-50 block hamburger lg:hidden focus:outline-none`}
            onClick={hamburgerClicked}
          >
            <span
              className={`${isClicked ? "bg-white" : "bg-black"} hamburger-top`}
            ></span>
            <span
              className={`${
                isClicked ? "bg-white" : "bg-black"
              } hamburger-middle`}
            ></span>
            <span
              className={`${
                isClicked ? "bg-white" : "bg-black"
              } hamburger-bottom`}
            ></span>
          </button>
        </div>
      </nav>
      <div className="mx-4 border border-b-0 border-gray-300 dark:border-gray-600"></div>
      {/* Mobile Menu */}
      <div
        id="menu"
        className={`${
          isClicked ? "flex" : "hidden"
        } absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black lg:hidden z-40`}
      >
        <Link to="/" className="hover:text-lightBlue">
          Home
        </Link>
        <Link to="about" className="hover:text-lightBlue">
          About
        </Link>
        <Link to="project" className="hover:text-lightBlue">
          Projects
        </Link>
        <Link to="experience" className="hover:text-lightBlue">
          Experience
        </Link>
        <Link to="contact" className="hover:text-lightBlue">
          Contact
        </Link>
      </div>
    </Fragment>
  );
};

export default Navbar;
