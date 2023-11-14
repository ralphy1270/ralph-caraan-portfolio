import { Fragment } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer className="py-7 md:px-20 relative bg-[#09090b] text-white">
        <motion.div
          className="relative -top-24 max-w-4xl bg-gradient-to-r from-[#006677] via-bluish to-lightBlue mx-7 md:mx-auto py-10 md:py-14 px-7 md:px-6 rounded-md"
          initial={{ y: 0 }}
          animate={{ y: [0, 17] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            type: "tween",
            ease: "easeInOut",
          }}
        >
          <div className="flex flex-col space-y-5 md:space-y-0 text-left justify-start items-center md:flex-row md:items-center md:justify-around">
            <div className="md:w-8/12 w-full">
              <p className="text-2xl md:text-4xl font-bold">
                Let's work together on your next project
              </p>
              <p className="mt-4 font-medium">
                I can set up a free consultation to discuss and bring your next
                idea to life.
              </p>
            </div>
            <div className="flex md:w-4/12 w-full">
              <Link to="/contact" className="w-fit py-2 px-6 font-medium bg-gradient-to-r from-[#004455] via-[#006677] to-[#004455] flex items-center mx-auto shadow-2xl shadow-[#004455] rounded-sm cursor-pointer hover:brightness-90">
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between pb-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2 text-white mb-5 md:mb-0">
            <div className="text-4xl font-semibold">
              Don't know where to start?
            </div>
            <button className="flex items-center justify-cetnter mt-8 space-x-1 tag-background-gradient text-[#09090b] font-semibold px-3 py-1 rounded-md hover:brightness-110 duration-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#09090b"
              >
                <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
              </svg>
              <a href="https://calendly.com/caraanralph/15min" target="_blank" rel="noreferrer">Book a call</a>
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="text-lg px-7 md:px-20">
            I create websites for business software solutions and beyond, delivering tailored, efficient, and user-friendly digital experiences.
            </div>
            <div className="flex justify-center md:justify-end mt-8 space-x-3">
              <a href="https://www.facebook.com/profile.php?id=100014631107203" target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ralph-caraan-9aba18143/" target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <circle cx="4.983" cy="5.009" r="2.188"></circle>
                  <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                </svg>
              </a>
              <a href="https://github.com/ralphy1270" target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-600"></div>
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
          <nav className="flex flex-row space-x-7 items-start justify-around py-5 md:py-10 font-medium"> 
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contacts</Link>
          </nav>
          <div className="flex justify-center text-center md:text-left md:justify-end md:py-10 brightness-75">
            @ 2023 Ralph Albert Caraan. All rights reserved.
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
