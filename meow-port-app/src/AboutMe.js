import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Row, Col, Carousel, Image, Card, CardBody, CardText, Button } from "react-bootstrap";
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

				<Col className="socialsCol">
					<Row>
						<Card>
							<Card.Body>
								<Card.Title>Socials</Card.Title>
							</Card.Body>
						</Card>
					</Row>

					<Row>
						<Container>
							<Row>
								<Col><Button variant="danger" href="https://www.instagram.com/_meowriam_/" target="_blank">Instagram</Button></Col>
								<Col><Button variant="success" href="https://open.spotify.com/user/mairix3?si=a4411d782b4144c4" target="_blank">Spotify</Button></Col>
								<Col><Button variant="dark" href="https://steamcommunity.com/id/11151999/" target="_blank">Steam</Button></Col>
							</Row>
						</Container>
					</Row>
				</Col>

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
							<img className="d-block w-100" src={castleImage} alt="First Slide"/>
							<Carousel.Caption>
								<h3>Title</h3>
								<p>insert description here?</p>
							</Carousel.Caption>
							</Container>
						</Carousel.Item>
						<Carousel.Item>
							<Container>
							<img className="d-block w-100" src={towerImage} alt="Second Slide"/>
							<Carousel.Caption>
								<h3>Title</h3>
								<p>insert description here?</p>
							</Carousel.Caption>
							</Container>
						</Carousel.Item>
						<Carousel.Item>
							<img className="d-block w-100" src={rockefellerImage} alt="Third Slide"/>
							<Carousel.Caption>
								<h3>Title</h3>
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
