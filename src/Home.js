import React from "react";
import { Link } from "react-router-dom";
import "./cssFiles//Home.css";
import { Container, Row, Col, Card, Nav, Navbar, Button, ListGroup, Accordion, ListGroupItem, Image, CardTitle} from "react-bootstrap";
import myImage from "./imgs/miriamimg.jpg";
import myResume from "./Docs/Miriam_Resume_.pdf";

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
			<p>Software Engineer | Front End Developer | Web Developer | Problem Solver</p>
		</Container>

		{/*THIS IS THE HEADER CONTAINER - Will have a welcome msg and an img of me*/}
		<Container className="first-container">
			<Row className="welcome-message-row">
				<Col md={6} sm={12} className="home-messsage">
					<h1>Welcome to my Portfolio!</h1>
					<Card className="card-message">
					I'm passionate about building seamless user experiences and solving complex technical challenges. With some expertise in FLUTTER, REACT JS, and FIREBASE, I aspire to create apps and websites that are both functional and cool.
					</Card>
				</Col>
				<Col md={6} sm={12} className="miriam-image">
					<Image className="imageMiriam" src={myImage} roundedCircle fluid/>
				</Col>

			</Row>
		</Container>

		{/*THIS WILL BE THE CONTAINER THAT TALKS ABOUT MY SKILLS - TECH STACK + RESUME*/}
		<Container className="second-container">
			<Row className="tech-resume-row">
				<Col className="PL-stack">
					<h2>Programming Languages</h2>
					<Card className="tech-card">
						<ul>
							<li>Javascript</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>Java</li>
							<li>Python</li>
							<li>Dart</li>
						</ul>
					</Card>
				</Col>

				<Col className="FT-stack">
					<h3>Frameworks & Tools</h3>
					<Card className="resume-card">
						<ul>
							<li>Bootstrap</li>
							<li>React JS</li>
							<li>Flutter</li>
							<li>Firebase</li>
							<li>Android Studio</li>
						</ul>
					</Card>
				</Col>

				<Col className="strengths-stack">
					<h3>Strengths</h3>
					<Card className="strengths-card">
						<ul>
							<li>Cross-platform development</li>
							<li>API integration</li>
							<li>Technical communication</li>
							<li>Adaptability</li>
							<li>Quick Learning</li>
						</ul>
					</Card>
				</Col>

			</Row>
		</Container>

		<Container className="contact-me-block">
			<Row className="contact-row">
				<h2>Lets Keep in Touch!</h2>
				<Col className="gmail-col">
					<a>email: miriamteresaram@gmail.com</a>
				</Col>
				<Col className="linkedin-col">
					<a href="https://www.linkedin.com/in/miriamtramirez" target="_blank">www.linkedin.com/in/miriamtramirez </a>
				</Col>
				<Col className="github-col">
					<a href="https://github.com/miriamrami" target="_blank">github.com/miriamrami </a>
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
