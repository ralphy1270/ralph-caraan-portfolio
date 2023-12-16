import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Error from "./Error";
import Loader from "./Loader";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const [ready, isReady] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      isReady(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      // Show light icon
      return setIsDarkModeOn(true);
    } else {
      return setIsDarkModeOn(false);
    }
  }, []);

  const DarkMode = () => {
    if (localStorage.getItem("color-theme")) {
      // If light, make dark and save in localstorage
      if (localStorage.getItem("color-theme") === "light") {
        setIsDarkModeOn(true);
        localStorage.setItem("color-theme", "dark");
      } else {
        setIsDarkModeOn(false);
        localStorage.setItem("color-theme", "light");
      }
    } else {
      // If not in localstorage
      if (document.documentElement.classList.contains("dark")) {
        setIsDarkModeOn(false);
        localStorage.setItem("color-theme", "light");
      } else {
        setIsDarkModeOn(true);
        localStorage.setItem("color-theme", "dark");
      }
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className={`${isDarkModeOn && "dark "}`}>
          <div
            className={`w-full h-auto bg-light text-veryDarkBlue text-lg dark:bg-darkest dark:text-light font-medium`}
          >
            <AnimatePresence>
              {ready && (
                <motion.div
                  key="loader"
                  animate={{ opacity: 1 }}
                  exit={{ opacity:0, y: -700 }}
                  transition={{ type: "spring", duration: 0.5 }}
                >
                  <Loader />
                </motion.div>
              )}
              {!ready && (
                <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{ duration: 0.5 }} key="root">
                  <RootLayout
                    setDarkMode={DarkMode}
                    darkModeSwitch={isDarkModeOn}
                    layout
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ),
      errorElement: <Error />,
      children: [
        { index: true, element: <Home darkModeSwitch={isDarkModeOn} /> },
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <div className={`${isDarkModeOn && "dark "}`}>
      <div
        className={`w-full h-auto  bg-light text-veryDarkBlue dark:bg-veryDarkBlue`}
      >
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
