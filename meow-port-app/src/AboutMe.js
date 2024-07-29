import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Row, Col, Carousel, Image, Card, CardBody, CardText } from "react-bootstrap";
import "./cssFiles//AboutMe.css";
import myImage from "./imgs/miriamimg.jpg";
import castleImage from "./imgs/osakaCastle.jpg";
import towerImage from "./imgs/tokyoTower.jpg";
import rockefellerImage from "./imgs/rockefellerTower.jpg";
import oliImage from "./imgs/bbOliver.jpg";

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
		<Container className="c1">
			<Row className="AM-row1">
				<Col>
					<Image src={myImage} roundedCircle fluid/>
				</Col>
				<Col className="nameInfoCol">
					<Card bg="primary">
						<CardBody>
							<CardText className="nameCardText">Miriam T Ramirez</CardText>
						</CardBody>
					</Card>
					<Card bg="primary">
						<CardBody>
							<CardText>e-mail: miriamteresaram@gmail.com</CardText>
						</CardBody>
					</Card>
				</Col>
				<Col> Links? </Col>
			</Row>
		</Container>
		<Container className="c2">
			<Row className="AM-row2">
				<Col>A short intro about myself?
					<Card>
						<CardBody>
							My name is Miriam Ramirez and I graduated from the University of Texas at El Paso with a Bachelor's of Science in Computer Science and with a minor in Mathematics.
							During my time in college I worked for the University's Technology Support where I lasted until I graduated.
							
						</CardBody>
					</Card>
				</Col>
				<Col>Interests/Hobbies </Col>
				<Col>
				<Image src={oliImage} roundedCircle fluid/>
				</Col>
			</Row>
		</Container>
		<Container className="c3">
			<Row className="AM-row3">
				<Col>
					<Carousel>
						<Carousel.Item>
							<Container className="c4">
							<Image src={castleImage} text="Slide 1" rounded fluid className="img1"/>
							<Carousel.Caption>
								<h3>Osaka Castle in the Distance</h3>
								<p>insert description here?</p>
							</Carousel.Caption>
							</Container>
						</Carousel.Item>
						<Carousel.Item>
							<Container>
							<Image src={towerImage} text="Slide 2" rounded fluid className="img2"/>
							<Carousel.Caption>
								<h3>Tokyo Tower</h3>
								<p>insert description here?</p>
							</Carousel.Caption>
							</Container>
						</Carousel.Item>
						<Carousel.Item>
							<Image src={rockefellerImage} text="Slide 3" rounded fluid className="img3" />
							<Carousel.Caption>
								<h3>Rockerfeller Tower During Christmas</h3>
								<p>insert description here?</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>
		</Container>

		</div>
	</body>



	);
};

export default AboutMe;
