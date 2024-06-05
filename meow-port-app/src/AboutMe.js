import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import "./cssFiles//AboutMe.css";

const AboutMe = () => {
	return (
	<body>
		<div className="home-background">
		<Navbar className="home-nav">
			<Container>
				<Navbar.Brand href="/">:3</Navbar.Brand>
					<Nav className="my-navbar">
						<Link className="nav-link" to="/">Home</Link>
						<Link className="nav-link active" aria-current="page" to="/AboutMe.js">About Me</Link>
						<Link className="nav-link" to="/Projects.js">Projects</Link>
				</Nav>
			</Container>
		</Navbar>

		<Container className="AboutMe-container">
			<Stack className="AM-stack">
				<div className="p-2">stack one</div>
				<div className="p-2">stack two</div>
				<div className="p-2">stack three</div>
			</Stack>
		</Container>

		</div>
	</body>



	);
};

export default AboutMe;
