import './Home.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import AboutMe from "./AboutMe.js"


function Home() {
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
              path="*"
              element={<Navigate to="/" />}
            />

          </Routes>
        </Router>
      }
    </>
  );
}

export default Home;
