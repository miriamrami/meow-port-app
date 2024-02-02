import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
	return (
		<div>
			<h1>Project Showcase</h1>
			<br/>
			<li>
				{/* Endpoint to route to Home component */}
				<Link to="/Home.js">Home</Link>
			</li>
		</div>
	);
};

export default Projects;
