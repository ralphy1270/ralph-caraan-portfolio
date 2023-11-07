import { Fragment } from "react";
import Section from "./home/Section";
import Projects from "./home/Projects";
import About from "./home/About";
import Footer from "./home/Footer";

const Home = (prop) => {
  return (
    <Fragment>
      <Section darkModeSwitch={prop.darkModeSwitch}/>
      <Projects/>
      <About darkModeSwitch={prop.darkModeSwitch}/>
      <Footer/>
    </Fragment>
  );
};

export default Home;
