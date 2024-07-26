import React from "react";
import { Link } from "react-router-dom";
import "./cssFiles//Home.css";
import { Container, Row, Col, Card, Nav, Navbar, Button, Image } from "react-bootstrap";
import ghcImg from "./imgs/miriamAtGHC.jpg";

const Home = () => {
	return (
	<body>
		<div className="home-background">

		<Navbar className="home-nav">
			<Container>
				<Navbar.Brand href="/">:3</Navbar.Brand>
					<Nav className="my-navbar">
						<Link className="nav-link active" aria-current="page" to="/">Home</Link>
						<Link className="nav-link" to="/AboutMe.js">About Me</Link>
						<Link className="nav-link" to="/Projects.js">Projects</Link>
				</Nav>
			</Container>
		</Navbar>

		<Container>
			<Row>
				<Col>
				</Col>
			</Row>
		</Container>

		<Container fluid>
			<Row className="row1">
				<Col>
					<Card className="cardWelcome">
					<Card.Img variant="top" src={ghcImg} rounded fluid />
						<Card.Body>
							<Card.Text>Me at the 2019 GHC</Card.Text>
						</Card.Body>
					
					</Card>
				</Col>
			</Row>
		</Container>
		<Container fluid>
			<Row className="row2">
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>
								Let's Keep in Touch!
							</Card.Title>
							<Button variant="Link" href="https://www.linkedin.com/in/miriamtramirez/">LinkedIn</Button>
							<Button variant="Link">miriamteresaram@gmail.com</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
		<Container fluid>
			<Row className="row3">
				<Col>
					Website by meowzillaa =^-w-^=
				</Col>
			</Row>
		</Container>
		</div>
	</body>
	);
};

export default Home;
