import { Fragment } from "react";
import { Helmet } from 'react-helmet';

import Section from "./home/Section";
import Projects from "./home/Projects";
import About from "./home/About";
import Footer from "./home/Footer";

const Home = (prop) => {
  return (
    <Fragment>
      <Helmet>
        <title>Ralph Albert Caraan Portfolio</title>
        <meta name="description" content="Hi, I'm Ralph Albert Caraan! a passionate programmer specializing in web development." />
      </Helmet>
      <Section darkModeSwitch={prop.darkModeSwitch}/>
      <Projects/>
      <About darkModeSwitch={prop.darkModeSwitch}/>
      <Footer/>
    </Fragment>
  );
};

export default Home;
