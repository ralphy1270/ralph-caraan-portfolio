import { Fragment } from "react";

const Projects = (prop) => {
  return (
    <Fragment>
      <section className="bg-darkest">
        <div className="flex flex-col h-screen justify-start items-center pt-16 px-12 mx-8 rounded-t-3xl bg-gradient-to-r from-veryDarkBlue to-darkBlue">
          <div className="flex flex-col items-center space-y-2 md:flex-row w-full md:items-start justify-between">
            <div className="flex text-5xl font-bold items-center space-x-2">
              <div className="border-b-4 border-bluish w-12"></div>
              <div>Recent Projects</div>
              <div className="border-b-4 border-bluish w-12"></div>
            </div>
            <div className="flex view-all border-2 border-bluish space-x-1 hover:bg-gradient-to-r hover:from-bluish hover:to-lightBlue hover:text-darkest text-lightBlue p-2 font-semibold rounded-lg cursor-pointer">
              <span>View all</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#00D4E6"
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
