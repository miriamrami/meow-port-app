import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap/Carousel';
import "./cssFiles//AboutMe.css";

const AboutMe = () => {
	return (
	<body>
		<div className="AboutMe">
			<h1> </h1>
			<ul className="nav nav-tabs">
				<li className="nav-item">
					{/* Endpoint to route to Home component */}
					<Link className="nav-link" to="/Home.js">Home</Link>
				</li>
				<li className="nav-item">
					{/* Endpoint to route to About component */}
					<Link className="nav-link active" aria-current="page" to="/AboutMe.js">About Me</Link>
				</li>
				<li className="nav-item">
					{/* Endpoint to route to Home component */}
					<Link className="nav-link" to="/Projects.js">Projects</Link>
				</li>
			</ul>
		</div>
	</body>
	);
};

export default AboutMe;
