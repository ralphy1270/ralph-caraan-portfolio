import { Fragment } from "react";
import ralph from "../assets/images/ralph caraan.png";

const Section = (prop) => {
  return (
    <Fragment>
      {/* Introduction */}
      <section className="w-full dark:text-light dark:bg-darkest font-bodyFont">
        <div className="flex flex-col-reverse mx-14 lg:mx-[75px] pb-2 pt-10 lg:pt-20 items-center lg:items-start lg:justify-between lg:flex-row lg:pb-0">
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start justify-center pt-4 mt-16 lg:pt-0 lg:w-1/2">
            <div className="tag-gradient-highlighted text-veryDarkBlue font-bold text-base border-[1px] border-bluish uppercase max-w-fit px-3 lg:mb-4 rounded-full">
              Web Developer
            </div>
            <div className="flex flex-col lg:mb-14">
              <div className="text-3xl lg:text-6xl font-semibold tracking-tight lg:mb-4 mt-4 lg:mt-0">
                <span className="text-gradient-highlighted">Ralph </span>
                Albert Caraan
              </div>
              <div className="text-2xl lg:text-4xl font-semibold">
                Bringing your business to{" "}
                <span className="text-gradient-highlighted font-semibold">
                  web.
                </span>
              </div>
            </div>
            {/* <div className="flex items-start text-base font-medium text-gray-800 dark:font-normal dark:text-gray-300 space-x-1 pt-6 lg:pt-0">
              <div className="-top-1 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={prop.darkModeSwitch ? "#D1D5DB" : "#323946"}
                >
                  <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z"></path>
                </svg>
              </div>
              <div className="leading-6 text-left">
                Hi, I'm Ralph! a passionate web developer specializing in
                <span className="text-gradient-highlighted font-bold">
                  {" "}
                  ReactJS and NextJS
                </span>
                , turning ideas into innovative web solutions through code.
                <div className="-top-1 inline-block relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={prop.darkModeSwitch ? "#D1D5DB" : "#323946"}
                    style={{ transform: "scaleX(-1)" }} // Invert along the x-axis
                  >
                    <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z"></path>
                  </svg>
                </div>
              </div>
            </div> */}
            {/* CV, Schedule and contacts */}
            <div className="flex flex-col font-titleFont">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <button className="text-lg py-3 px-8 border-2 border-bluish text-bluish dark:text-lightBlue hover:text-darkest dark:hover:text-darkest hover:bg-gradient-to-r hover:from-bluish hover:to-lightBlue rounded-lg font-medium">
                  Download CV
                </button>
                <a
                  href="https://calendly.com/caraanralph/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-lg font-medium dark:text-lg py-3 px-8 dark:bg-[#323946] dark:hover:bg-[#374151] bg-gray-300 hover:bg-gray-200 rounded-lg">
                    <div className="flex space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={prop.darkModeSwitch ? "#D1D5DB" : "#323946"}
                      >
                        <path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"></path>
                      </svg>
                      <span
                        className={`text-[${
                          prop.darkModeSwitch ? "#D1D5DB" : "#323946"
                        }]`}
                      >
                        Book a meeting
                      </span>
                    </div>
                  </button>
                </a>
              </div>
              <div className="text-center lg:text-left text-gray-800 font-semibold dark:font-normal dark:text-gray-300 tracking-tight mt-5 mb-2 uppercase">
                Find Me On:
              </div>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100014631107203"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="group contact-icons p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill={prop.darkModeSwitch ? "#D1D5DB" : "#323946"}
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/caraanralph/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="group contact-icons p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill={prop.darkModeSwitch ? "#D1D5DB" : "#323946"}
                    >
                      <circle cx="4.983" cy="5.009" r="2.188"></circle>
                      <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/ralph-caraan-9aba18143/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="group contact-icons p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
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
          </div>
          {/* Picture */}
          <div className="lg:w-1/2">
            <div className="flex flex-col items-end justify-center lg:items-end lg:justify-end lg:relative">
              <img
                src={ralph}
                alt="Ralph Caraan"
                className="max-w-[80%] z-20 hidden lg:block"
              />
              <div
                className={`${
                  prop.darkModeSwitch
                    ? "background-gradient"
                    : "background-gradient-light"
                } rounded-t-3xl w-[320px] h-[280px] lg:w-[80%] lg:h-[90%] relative lg:absolute`}
              >
                <img
                  src={ralph}
                  alt="Ralph Caraan"
                  className="w-full h-auto lg:hidden absolute bottom-0 z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Section;
