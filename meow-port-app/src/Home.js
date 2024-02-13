import React from "react";
import { Link } from "react-router-dom";
import "./cssFiles//Home.css";

const Home = () => {
	return (
		<div className = "Home">
			<br/>
			<h1>Home Page</h1>
			<br />
			<ul className="nav nav-tabs">
				<li className="nav-item">
					{/* Endpoint to route to Home component */}
					<Link className="nav-link active" aria-current="page" to="/">Home</Link>
				</li>
				<li className="nav-item">
					{/* Endpoint to route to About component */}
					<Link className="nav-link" to="/AboutMe.js">About Me</Link>
				</li>
				<li className="nav-item">
					{/* Endpoint to route to Project component */}
					<Link className="nav-link" to="/Projects.js">Projects</Link>
				</li>
			</ul> {/**nav nav-tabs */}
		</div>
	);
};

export default Home;
