import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./Home.js";
import AboutMe from "./AboutMe.js";
import Projects from "./Projects.js";


function App() {
  return (
    <>
      {
        <Router>
          <Routes>
            {/*Linking to the Home Page*/}
            <Route
              exact path= "/"
              element={<Home/>} 
            />
            {/*Lingking to AboutMe Page*/}
            <Route
              exact path="/AboutMe.js"
              element={<AboutMe/>}
            />
            <Route
              exact path="/Projects.js"
              element={<Projects/>}
            />

            <Route
              path="*"
              element={<Navigate to="/" />}
            />

          </Routes>
        </Router>
      }
    </>
  );
}

export default App;