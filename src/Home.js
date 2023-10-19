import { Fragment } from "react";
import Section from "./home/Section";
import Projects from "./home/Projects";

const Home = (prop) => {
  return (
    <Fragment>
      <Section darkModeSwitch={prop.darkModeSwitch} />
      <Projects/>
    </Fragment>
  );
};

export default Home;
