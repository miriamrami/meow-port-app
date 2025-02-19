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

		<Container className="hero-container">
			<h1>Howdy! I'm Miriam Ramirez... </h1>
			<p>Software Engineer | Cross-Platform Developer | Problem Solver</p>
		</Container>

		{/*THIS IS THE HEADER CONTAINER - Will have a welcome msg and an img of me*/}
		<Container className="first-container">
			<Row className="welcome-message-row">
				<Col className="home-messsage">
					<h2>A little about me...</h2>
					<Card className="card-message">
					I'm passionate about building seamless user experiences and solving complex technical challenges. With some expertise in FLUTTER, REACT JS, and FIREBASE. I aspire to create apps and websites that are both functional and beautiful.
					</Card>
				</Col>
				<Col className="miriam-image">
					<Image className="imageMiriam" src={myImage} roundedCircle fluid/>
				</Col>

			</Row>
		</Container>

		{/*THIS WILL BE THE CONTAINER THAT TALKS ABOUT MY SKILLS - TECH STACK + RESUME*/}
		<Container className="second-container">
			<Row className="tech-resume-row">
				<Col className="tech-stack">
					<h2>Tech Stack</h2>
					<Card>Write about tech stack here</Card>
				</Col>

				<Col className="resume-document">
					<h3>Resume</h3>
					<Card>Insert resume here</Card>
				</Col>

			</Row>
		</Container>

		{/*CONTAINER WITH THE SITE FOOTER*/}
		<Container className="footer-container"fluid>
			<Row className="footer-row">
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
