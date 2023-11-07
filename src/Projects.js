import { Fragment } from "react";
import Footer from "./home/Footer";
import Ecommerce_One from "./assets/images/home-projects/Ecommerce-1.jpeg";

const Projects = () => {
  return (
    <Fragment>
      <section className="px-20 pt-20 pb-56">
        <div className="text-8xl font-bold pb-10">Projects.</div>
        <div className="text-2xl font-bold space-x-2 pb-20">
          <div>
            Discover my latest project, explore the fusion of design and codes.
          </div>
        </div>
        {/* Project One */}
        <div className="grid grid-cols-2">
          <div className="h-auto overflow-hidden cursor-pointer hover:brightness-90 duration-100">
            <img src={Ecommerce_One} alt="Project-1" />
          </div>
          <div className="flex flex-col items-start justify-center pl-7 text-base">
            <div className="text-2xl font-bold min-h-min">Ingredient Savvy</div>
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
                Ever heard of the International Leadership Training Program
                (ILTP)? Well, I built their website using ReactJS! It's this
                cool volunteer organization based in the US. Here's the kicker:
                I tackled the whole website backend myself, since I was still
                learning about Headless CMS. That was quite the adventure, let
                me tell you. But hey, the result? A snazzy website that
                showcases my problem-solving skills, adaptability, and
                commitment to creating awesome user experiences.
              </p>
            </div>
            <div className="flex space-x-4 mt-3">
              <a
                href="#demo"
                target="_blank"
                className="tag-background-gradient text-darkest font-semibold px-4 py-2 rounded-md hover:brightness-95"
              >
                Demo
              </a>
              <a
                href="#github"
                target="_blank"
                className="tag-background-gradient text-darkest font-semibold px-4 py-2 rounded-md hover:brightness-95"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        {/* Project Two */}
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-start justify-center pr-7 text-base">
            <div className="text-2xl font-bold min-h-min">Ingredient Savvy</div>
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
                Ever heard of the International Leadership Training Program
                (ILTP)? Well, I built their website using ReactJS! It's this
                cool volunteer organization based in the US. Here's the kicker:
                I tackled the whole website backend myself, since I was still
                learning about Headless CMS. That was quite the adventure, let
                me tell you. But hey, the result? A snazzy website that
                showcases my problem-solving skills, adaptability, and
                commitment to creating awesome user experiences.
              </p>
            </div>
            <div className="flex space-x-4 mt-3">
              <a
                href="#demo"
                target="_blank"
                className="tag-background-gradient text-darkest font-semibold px-4 py-2 rounded-md hover:brightness-95"
              >
                Demo
              </a>
              <a
                href="#github"
                target="_blank"
                className="tag-background-gradient text-darkest font-semibold px-4 py-2 rounded-md hover:brightness-95"
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
        <div className="grid grid-cols-2">
          <div className="h-auto overflow-hidden cursor-pointer hover:brightness-90 duration-100">
            <img src={Ecommerce_One} alt="Project-1" />
          </div>
          <div className="flex flex-col items-start justify-center pl-7 text-base">
            <div className="text-2xl font-bold min-h-min">Ingredient Savvy</div>
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
                Ever heard of the International Leadership Training Program
                (ILTP)? Well, I built their website using ReactJS! It's this
                cool volunteer organization based in the US. Here's the kicker:
                I tackled the whole website backend myself, since I was still
                learning about Headless CMS. That was quite the adventure, let
                me tell you. But hey, the result? A snazzy website that
                showcases my problem-solving skills, adaptability, and
                commitment to creating awesome user experiences.
              </p>
            </div>
            <div className="flex space-x-4 mt-3">
              <a
                href="#demo"
                target="_blank"
                className="tag-background-gradient text-darkest font-semibold px-4 py-2 rounded-md hover:brightness-95"
              >
                Demo
              </a>
              <a
                href="#github"
                target="_blank"
                className="tag-background-gradient text-darkest font-semibold px-4 py-2 rounded-md hover:brightness-95"
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
