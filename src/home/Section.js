import { Fragment } from "react";
import ralph from "../assets/images/ralph caraan.png";
import cv from "../assets/files/Ralph Caraan CV Resume.pdf";
import Typewriter from "typewriter-effect";

const Section = (prop) => {
  return (
    <Fragment>
      {/* Introduction */}
      <section className="w-full h-screen dark:bg-darkest font-bodyFont mb-10 lg:mb-0">
        <div className="flex flex-col-reverse mx-7 md:space-y-0 space-y-10 md:mx-14 lg:mx-20 pb-2 pt-10 lg:pt-8 items-center lg:items-start lg:justify-between lg:flex-row lg:pb-0">
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start justify-center pt-4 mt-16 lg:pt-0 lg:w-1/2">
            <div className="tag-gradient-highlighted text-veryDarkBlue font-bold text-base uppercase max-w-fit px-3 border border-lightBlue lg:mb-4 rounded-full">
              Web Developer
            </div>
            <div className="flex flex-col lg:mb-4">
              <div className="text-3xl lg:text-6xl font-semibold tracking-tight lg:mb-4 mt-4 lg:mt-0">
                <span className="text-gradient-highlighted">Ralph </span>
                Albert Caraan
              </div>
              <Typewriter
                options={{
                  strings: [
                    `<span class="slogan">Bringing your business to <span class=slogan-highlighted text-gradient-highlighted> web.</span><span>`,
                  ],
                  autoStart: true,
                  typeSpeed: 100,
                  deleteSpeed: 10,
                  delaySpeed: 3000,
                  loop: true,
                  cursor: `<span class="slogan-highlighted">|</span>`,
                }}
              />
            </div>
            <div className="lg:mb-14 lg:text-2xl mb-5">
              <span className="font-semibold">A Web Developer</span> based in
              Laguna, Philippines.
            </div>
            {/* CV, Schedule and contacts */}
            <div className="flex flex-col font-titleFont">
              <div className="flex flex-col  space-y-4 md:flex-row md:space-x-4  md:space-y-0  my-4 md:my-0">
                <a
                  href={cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg py-3 px-8 text-darkest hover:text-darkest bg-gradient-to-r from-bluish to-lightBlue rounded-md font-medium hover:brightness-110"
                >
                  Download CV
                </a>
                <a
                  href="https://calendly.com/caraanralph/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-lg font-medium dark:text-lg py-3 px-8 dark:bg-[#323946] dark:hover:bg-[#374151] bg-gray-300 hover:bg-gray-200 rounded-md">
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
                } rounded-t-md w-[320px] h-[280px] lg:w-[80%] lg:h-[90%] relative lg:absolute`}
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
