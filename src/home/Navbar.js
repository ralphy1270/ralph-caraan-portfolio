import ReactDOM from "react-dom";
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
      <div className="flex items-end justify-end h-7 lg:h-16 z-50 px-7 lg:px-20">
        <div className="flex space-x-3">
          <a
            href="https://www.facebook.com/profile.php?id=100014631107203"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill={prop.darkModeSwitch ? "#D1D5DB" : "#323946"}
              >
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
              </svg>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/ralph-caraan-9aba18143/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill={prop.darkModeSwitch ? "#D1D5DB" : "#323946"}
              >
                <circle cx="4.983" cy="5.009" r="2.188"></circle>
                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
              </svg>
            </div>
          </a>
          <a
            href="https://github.com/ralphy1270"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill={prop.darkModeSwitch ? "#D1D5DB" : "#323946"}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
      <nav className="flex items-center justify-between w-full px-7 lg:px-20 pt-2 text-base dark:bg-darkest z-30">
        {/* Logo and Name */}
        <div className="flex items-center justify-center space-x-0 z-40">
          <img
            src={logo}
            alt=""
            className={`${
              (prop.darkModeSwitch || isClicked) && "invert-color"
            } w-11`}
          />
          <div className="flex flex-col -space-y-2">
            <div className="flex max-w-max items-center space-x-1">
              <div
                className={`${
                  isClicked && "text-white lg:text-black"
                } text-lg font-semibold`}
              >
                Ralph Albert Caraan
              </div>
              <span dangerouslySetInnerHTML={{ __html: svgCode }}></span>
            </div>
            <div
              className={`${
                isClicked && "text-white lg:text-black"
              } font-semibold`}
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
                to="contact"
                className="group-hover:text-bluish dark:group-hover:text-light menu-link"
              >
                Contact
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
      {/* Mobile Menu */}
      {ReactDOM.createPortal(
        <div
          id="menu"
          className={`${
            isClicked ? "flex" : "hidden"
          } absolute top-0 bottom-0 left-0 flex-col self-end w-full h-full py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-darkest/90 lg:hidden z-40`}
        >
          <Link to="/" className="hover:text-lightBlue">
            Home
          </Link>
          <Link to="about" className="hover:text-lightBlue">
            About
          </Link>
          <Link to="projects" className="hover:text-lightBlue">
            Projects
          </Link>
          <Link to="contact" className="hover:text-lightBlue">
            Contact
          </Link>
          <div className="max-w-max">
            <DarkMode
              clickedDarkMode={prop.setDarkMode}
              darkModeSwitch={prop.darkModeSwitch}
            />
          </div>
        </div>,
        document.body
      )}
    </Fragment>
  );
};

export default Navbar;
