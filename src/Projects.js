import { Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "./home/Footer";
import Ecommerce_One from "./assets/images/home-projects/Ecommerce-1.jpg";

const Projects = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Projects | Ralph Albert Caraan Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Ralph Albert Caraan!. Discover my latest project, explore the fusion of design and codes."
        />
      </Helmet>
      <section className="px-7 lg:px-20 pt-20 pb-56">
        <div className="text-5xl md:text-8xl font-bold pb-10 text-center md:text-left">
          Projects.
        </div>
        <div className="text-2xl font-bold space-x-2 mb-12">
          <div>
            Discover my latest project, explore the fusion of design and codes.
          </div>
        </div>
        {/* Project One */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-10 lg:mb-0">
          <div className="h-auto overflow-hidden cursor-pointer hover:brightness-90 duration-100">
            <img src={Ecommerce_One} alt="Project-1" />
          </div>
          <div className="flex flex-col items-start justify-center md:px-7 text-base">
            <div className="text-2xl font-bold min-h-min mt-5 md:mt-0">
              Ingredient Savvy
            </div>
            <div className="flex flex-wrap my-2 items-start md:justify-start">
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                react
              </span>
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                Firebase
              </span>
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                Tailwind
              </span>
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                MongoDB
              </span>
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                NodeJS
              </span>
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                Express
              </span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex space-x-4 mt-3">
              <a
                href="#demo"
                target="_blank"
                className="tag-background-gradient text-darkest font-semibold px-4 py-2 rounded-md hover:brightness-110"
              >
                Demo
              </a>
              <a
                href="#github"
                target="_blank"
                className="tag-background-gradient text-darkest font-semibold px-4 py-2 rounded-md hover:brightness-110"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        {/* Project Two */}
        <div className="reverse-card grid grid-cols-1 md:grid-cols-2 mb-10 lg:mb-0">
          <div className="flex flex-col items-start justify-center p-0 md:px-7 text-base">
            <div className="text-2xl font-bold min-h-min mt-5 md:mt-0">
              Project coming soon!
            </div>
            <div className="flex flex-wrap my-2 items-start justify-start">
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                react
              </span>
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                Firebase
              </span>
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                Tailwind
              </span>
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                MongoDB
              </span>
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                NodeJS
              </span>
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                Express
              </span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex space-x-4 mt-3">
              <a
                href="#demo"
                target="_blank"
                className="tag-background-gradient text-darkest font-semibold px-4 py-2 rounded-md hover:brightness-110"
              >
                Demo
              </a>
              <a
                href="#github"
                target="_blank"
                className="tag-background-gradient text-darkest font-semibold px-4 py-2 rounded-md hover:brightness-110"
              >
                GitHub Repository
              </a>
            </div>
          </div>
          <div className="h-auto overflow-hidden cursor-pointer hover:brightness-90 duration-100">
            <img src={Ecommerce_One} alt="Project-1" />
          </div>
        </div>
        {/* Project One */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-auto overflow-hidden cursor-pointer hover:brightness-90 duration-100">
            <img src={Ecommerce_One} alt="Project-1" />
          </div>
          <div className="flex flex-col items-start justify-center px-0 md:px-7 text-base">
            <div className="text-2xl font-bold min-h-min mt-5 md:mt-0">
              Project coming soon!
            </div>
            <div className="flex flex-wrap my-2 items-start justify-start">
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                react
              </span>
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                Firebase
              </span>
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                Tailwind
              </span>
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                MongoDB
              </span>
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                NodeJS
              </span>
              <span className="my-1 mr-2 px-3 max-w-max uppercase rounded-full tag-background-gradient text-darkest font-semibold">
                Express
              </span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex space-x-4 mt-3">
              <a
                href="#demo"
                target="_blank"
                className="tag-background-gradient text-darkest font-semibold px-4 py-2 rounded-md hover:brightness-110"
              >
                Demo
              </a>
              <a
                href="#github"
                target="_blank"
                className="tag-background-gradient text-darkest font-semibold px-4 py-2 rounded-md hover:brightness-110"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Projects;
