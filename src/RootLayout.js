import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./home/Navbar";

const RootLayout = (prop) => {
  return (
    <Fragment>
      <Navbar setDarkMode={prop.setDarkMode} darkModeSwitch={prop.darkModeSwitch} />
      <Outlet/>
    </Fragment>
  );
};

export default RootLayout;
