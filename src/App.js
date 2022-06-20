import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Asteroids from "pages/Asteroids";

import "styles/main.css";

export const WidthContext = React.createContext(null);

function App() {
  const [width, setWidth] = useState(getWidthLevel(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWidthLevel(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WidthContext.Provider value={width}>
      <Router>
        <Routes>
          <Route path="/" element={<Asteroids />}></Route>
        </Routes>
      </Router>
    </WidthContext.Provider>
  );
}

// for more info read utils/constants.js, section RESPONSIVE CONSTANTS
const getWidthLevel = (/** @type {number} */ width) => {
  if (width < 576) return 1; // phones
  else if (width < 768) return 2; // portrait tablets and large phones
  else if (width < 992) return 3; // landscape tablets
  else if (width < 1200) return 4; // laptops/desktops
  else if (width < 1400) return 5; // large laptops and desktops
  else return 6; // extra large laptops and desktops
};

export default App;
