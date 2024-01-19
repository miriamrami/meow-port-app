import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1>Home Page</h1>
			<br />
			<ul>
				<li>
					{/* Endpoint to route to Home component */}
					<Link to="/">Home</Link>
				</li>
				<li>
					{/* Endpoint to route to About component */}
					<Link to="/AboutMe.js">About Me</Link>
				</li>
				<li>
					{/* Endpoint to route to Project component */}
					<Link to="/Projects.js">Projects</Link>
				</li>
			</ul>
		</div>
	);
};

export default Home;
