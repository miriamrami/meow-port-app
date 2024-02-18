import React from "react";
import { Link } from "react-router-dom";
import "./cssFiles//AboutMe.css";

const AboutMe = () => {
	return (
	<body>
		<div>
			<br/>
			<h1>About Me</h1>
			<br/>
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
		<div>
			<div className="row" >
				<div className="col"><img src={require('./imgs//IMG_7903.jpg')} width={200} height={200} className= "img-fluid" alt=" " /></div>
				<div className="col">
					<div className="row" >insert name here</div>
					<div className="row" >insert socials here?</div>
				</div>
			</div>

			<div className="row"  >
				<div className="col"></div>
			</div>

			<div className="row">
			</div>
		</div>
	</body>
	);
};

export default AboutMe;
