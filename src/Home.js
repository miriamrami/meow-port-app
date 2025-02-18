import React from "react";
import { Link } from "react-router-dom";
import "./cssFiles//Home.css";
import { Container, Row, Col, Card, Nav, Navbar, Button, ListGroup, Accordion, ListGroupItem, Image, CardTitle} from "react-bootstrap";
import myImage from "./imgs/miriamimg.jpg";

const Home = () => {
	return (
	<body>
		<div className="home-background">

		{/*THIS IS THE NAVBAR CONTAINER */}
		<Navbar sticky="top" className="home-nav">
			<Container>
				<Navbar.Brand href="/Home.js">=^-w-^=</Navbar.Brand>
					<Nav className="nav-tabs">
						<Link className="nav-link active" aria-current="page" to="/">Home</Link>
						<Link className="nav-link" to="/AboutMe.js">About Me</Link>
						<Link className="nav-link" to="/Projects.js">Projects</Link>
				</Nav>
			</Container>
		</Navbar>

		{/*THIS IS THE HEADER CONTAINER - Will have a welcome msg and an img of me*/}
		<Container className="home-header-container">
			<Row>
				<Col className="home-messsage">
					<CardTitle className="card-title-message">
						Howdy! I’m <mark>Miriam Ramirez, a Computer Science graduate</mark> with a passion for building innovative digital solutions. I’m particularly drawn to UI/UX design, where I get to blend creativity and functionality to create seamless user experiences. I’m also excited about <mark>mobile and web development</mark>, <mark>software engineering</mark>, and someday, <mark>game development</mark>.
					</CardTitle>
				</Col>
				<Col className="img-col">
					<Image className="imageMiriam" src={myImage} roundedCircle fluid/>
				</Col>

			</Row>
		</Container>

		{/*THIS WILL BE THE CONTAINER THAT TALKS ABOUT MY SKILLS - TECH STACK + RESUME*/}
		<Container className="home-body-container">
			<Row>
				<Container className="tech-stack-container">
					Write about tech stack here
				</Container>

				<Container className="resume-document-container">
					Include resume here
				</Container>

			</Row>

		</Container>

		
		<Container className="footer-container"fluid>
			<Row className="row3">
				<Col>
					Website by meowzilla =^-w-^=
				</Col>
			</Row>
		</Container>
		</div>
	</body>
	);
};

export default Home;
