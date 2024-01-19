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
					<Link to="/about">About</Link>
				</li>
				<li>
					{/* Endpoint to route to ------ component */}
					<Link to="/contactus">------</Link>
				</li>
			</ul>
		</div>
	);
};

export default Home;
