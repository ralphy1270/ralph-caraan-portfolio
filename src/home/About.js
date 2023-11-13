import { Fragment } from "react";
import { Link } from "react-router-dom";

const About = (prop) => {
  return (
    <Fragment>
      <section className="grid grid-cols-2 pt-16 gap-6 text-darkest dark:text-white">
        <div className=" text-center col-span-2 flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between space-y-5 lg:space-y-0 text-8xl font-bold p-7 md:px-20">
          <div className="flex text-5xl md:text-8xl font-bold items-center">
            <div>About Me.</div>
          </div>
          <div className="flex items-center view-all text-lg bg-white hover:bg-gray-200 text-darkest p-2 font-semibold rounded-md cursor-pointer duration-75">
            <Link to="/about">Show more</Link>
            <svg
              className="-rotate-45"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#18181b"
            >
              <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
            </svg>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 dark:bg-grayish px-7 md:px-20 pt-0 md:pt-14 pb-48">
          <div className="pr-6">
            <div className="flex items-start space-x-1 pt-6 lg:pt-0">
              <div className="text-left px-2">
                <p className="leading-loose">
                  <span className="text-gradient-highlighted font-bold text-xl">
                    Hi, I'm Ralph!
                  </span>{" "}
                  a passionate programmer specializing in web development.
                </p>
                <div className="mt-4 max-w-max px-3 text-darkest font-semibold tag-background-gradient rounded-sm">
                  Cultivating Expertise in ReactJS
                </div>
                <p className=" pt-4 leading-loose">
                  As the new year began, I enthusiastically adopted ReactJS and
                  NextJS, revolutionizing my web development approach. This
                  framework's seamless rendering, server-side capabilities, and
                  effortless routing have empowered me to craft high-performance
                  applications with exceptional user experiences. I'm dedicated
                  to turning creative ideas into innovative web solutions
                  through code. Let's create outstanding web experiences
                  together!
                </p>
                <div className="mt-4 max-w-max px-3 tag-background-gradient text-darkest font-semibold rounded-sm">
                  Specialized Skills
                </div>
                <p className=" pt-4 leading-loose">
                  I'm a highly skilled web developer, specializing in ReactJS,
                  and NextJS for frontend development. I have a strong grasp of
                  design, using Tailwind CSS and Framer Motion. Additionally, I
                  work with MERN stack and Firebase for server and database
                  solutions
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 font-medium">
            <div className="flex items-start justify-between p-6 bg-gray-200 dark:bg-darkest rounded-md hover:cursor-pointer hover:brightness-95 dark:hover:bg-black/75 hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-start w-10/12 space-y-4">
                <div className="text-gradient-highlighted text-xl font-bold">
                  Design
                </div>
                <div className="text-md">
                  Designing web experiences that harmoniously fuse aesthetics
                  and functionality, ensuring a captivating yet practical user
                  interface.
                </div>
              </div>
              <div className="flex w-1/6 items-start justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 24 24"
                  fill="#00D4E6"
                >
                  <path d="M6.42 9.87 12 20.78l5.58-10.91H6.42zM5.9 4.01 2 9.24h3.62l.28-5.23zm6.1-.59L6.63 9.24h10.74L12 3.42zM2.04 9.87l9.09 10.58L5.72 9.87H2.04zM11.53 3h-.15l-4.84.51a.09.09 0 0 1 0 .05l-.27 5.15zm1.34 17.45 9.09-10.58h-3.68l-5.41 10.58zm4.58-16.87a.09.09 0 0 1 0-.05l-4-.42-1-.11 5.26 5.71zm.65.43.28 5.23H22l-2.22-2.98-1.68-2.25z"></path>
                </svg>
              </div>
            </div>
            <div className="flex items-start justify-between p-6 bg-gray-200 dark:bg-darkest rounded-md hover:cursor-pointer hover:brightness-95 dark:hover:bg-black/75 hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-start w-10/12 space-y-4">
                <div className="text-gradient-highlighted text-xl font-bold">
                  Responsive
                </div>
                <div className="text-md">
                  Creating websites with a focus on seamless responsiveness
                  across all devices, delivering a consistent and enjoyable user
                  experience.
                </div>
              </div>
              <div className="flex w-1/6 items-start justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 24 24"
                  fill="#00D4E6"
                >
                  <path d="M20 3H7c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM6 9h4l-.003 9H4V9h2zm6 8V9c0-1.103-.897-2-2-2H7V5h11v12h-6z"></path>
                </svg>
              </div>
            </div>
            <div className="flex items-start justify-between p-6 bg-gray-200 dark:bg-darkest rounded-md hover:cursor-pointer hover:brightness-95 dark:hover:bg-black/75 hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-start w-10/12 space-y-4">
                <div className="text-gradient-highlighted text-xl font-bold">
                  Fast loading
                </div>
                <div className="text-md">
                  Prioritizing fast-loading websites, ensuring optimal
                  performance and user satisfaction by minimizing loading times.
                </div>
              </div>
              <div className="flex w-1/6 items-start justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 24 24"
                  fill="#00D4E6"
                >
                  <path d="M15.78 15.84S18.64 13 19.61 12c3.07-3 1.54-9.18 1.54-9.18S15 1.29 12 4.36C9.66 6.64 8.14 8.22 8.14 8.22S4.3 7.42 2 9.72L14.25 22c2.3-2.33 1.53-6.16 1.53-6.16zm-1.5-9a2 2 0 0 1 2.83 0 2 2 0 1 1-2.83 0zM3 21a7.81 7.81 0 0 0 5-2l-3-3c-2 1-2 5-2 5z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
