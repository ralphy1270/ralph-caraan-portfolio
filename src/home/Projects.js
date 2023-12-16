import { Fragment } from "react";
import Ecommerce_One from "../assets/images/home-projects/Ecommerce-1.jpg";
import Ecommerce_Two from "../assets/images/home-projects/Ecommerce-2.jpg";
import Ecommerce_Three from "../assets/images/home-projects/Ecommerce-3.jpg";
import { Link } from "react-router-dom";

const Projects = (prop) => {
  return (
    <Fragment>
      <section className="dark:bg-gradient-to-b bg-gray-100 dark:from-veryDarkBlue dark:to-darkest">
        <div className="flex flex-col relative justify-start items-center pt-16 px-7 md:px-20">
          <div className="flex flex-col text-center items-center lg:items-end lg:space-y-0 space-y-5 lg:flex-row w-full justify-between">
            <div className="text-5xl md:text-8xl font-bold space-x-2">
              <div>Recent Projects.</div>
            </div>
            <Link
              to="projects"
              className="flex items-center view-all text-lg dark:bg-white dark:hover:bg-gray-200 hover:bg-gray-200 text-darkest p-2 font-semibold rounded-md cursor-pointer duration-75"
            >
              <span>View all</span>
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
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full pt-20">
            <div className="group relative flex items-end md:col-span-7 w-full h-[250px] md:h-auto row-span-2 rounded-sm hover:cursor-pointer overflow-hidden">
              <div
                className="w-full h-full bg-cover group-hover:scale-110 duration-200 brightness-95"
                style={{ backgroundImage: `url(${Ecommerce_One})` }}
              />
              <div className="absolute flex flex-col items-start justify-between top-0 w-full h-full">
                <div className="text-lg font-bold py-1 px-2 bg-darkest/75 rounded-br-sm text-white">
                  Project coming soon!
                </div>
              </div>
            </div>
            <div className="group relative flex items-end md:col-span-5 w-full h-[250px] rounded-sm hover:cursor-pointer overflow-hidden">
              <div
                className="w-full h-full bg-cover group-hover:scale-110 duration-200 brightness-95"
                style={{ backgroundImage: `url(${Ecommerce_Two})` }}
              />
              <div className="absolute flex flex-col items-start justify-between top-0 w-full h-full">
                <div className="text-lg font-bold py-1 px-2 bg-darkest/75 rounded-br-sm text-white">
                  Project coming soon!
                </div>
              </div>
            </div>
            <div className="group relative flex items-end md:col-span-5 w-full h-[250px] rounded-sm hover:cursor-pointer overflow-hidden">
              <div
                className="w-full h-full bg-cover group-hover:scale-110 duration-200 brightness-95"
                style={{ backgroundImage: `url(${Ecommerce_Three})` }}
              />
              <div className="absolute flex flex-col items-start justify-between top-0 w-full h-full">
                <div className="text-lg font-bold py-1 px-2 bg-darkest/75 rounded-br-sm text-white">
                  Project coming soon!
                </div>
              </div>
            </div>
          </div>
          <div className="w-full text-center tag-background-gradient-text text-4xl font-semibold border-t border-darkest dark:border-gray-600 font-serif mt-40"></div>
          <div className="text-center tag-background-gradient-text text-2xl md:text-4xl font-bold mt-16 mb-32">
            <q>The only way to do great work is to love what you do.</q>
            <p>- Steve Jobs</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
