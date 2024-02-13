import React from "react";
import { Link } from "react-router-dom";
import "./cssFiles//Projects.css";

const Projects = () => {
	return (
		<div>
			<br/>
			<h1>Project Showcase</h1>
			<br/>
			<ul className="nav nav-tabs">
				<li className="nav-item">
					{/* Endpoint to route to Home component */}
					<Link className="nav-link" to="/Home.js">Home</Link>
				</li>
				<li className="nav-item">
					{/* Endpoint to route to About component */}
					<Link className="nav-link" to="/AboutMe.js">About Me</Link>
				</li>
				<li className="nav-item">
					{/* Endpoint to route to Home component */}
					<Link className="nav-link active" aria-current="page" to="/Projects.js">Projects</Link>
				</li>
				
			</ul>
		</div>
	);
};

export default Projects;
