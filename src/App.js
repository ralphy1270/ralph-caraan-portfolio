import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

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
            className={`w-full h-auto  bg-light text-veryDarkBlue dark:bg-veryDarkBlue dark:text-light `}
          >
            <RootLayout setDarkMode={DarkMode} darkModeSwitch={isDarkModeOn} />
          </div>
        </div>
      ),
      children: [
        { index: true, element: <Home darkModeSwitch={isDarkModeOn}/> },
        { path: 'about', element: <About /> },
        { path: 'experience', element: <Experience /> },
        { path: 'projects', element: <Projects /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ]);
  
  return (
    <div className={`${isDarkModeOn && "dark "}`}>
      <div
        className={`w-full h-auto  bg-light text-veryDarkBlue dark:bg-veryDarkBlue dark:text-light `}
      >
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
