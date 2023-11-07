import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./home/Navbar";
import { useEffect } from "react";

const RootLayout = (prop) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      const scrollToTopDuration = 300;
      const scrollStep = -window.scrollY / (scrollToTopDuration / 15);
      
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    };
    
    // Call the function to scroll to the top
    scrollToTop();

    //or this code:
    //document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    //or this code: window.scrollTo(0, 0);
    
  }, [pathname]);

  return (
    <Fragment>
      <Navbar setDarkMode={prop.setDarkMode} darkModeSwitch={prop.darkModeSwitch} />
      <Outlet/>
    </Fragment>
  );
};

export default RootLayout;
