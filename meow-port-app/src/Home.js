import React from "react";
import { Link } from "react-router-dom";
import "./cssFiles//Home.css";
import { Container, Row, Col, Card, Nav, Navbar, Button } from "react-bootstrap";

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



		<Container fluid>
			<Row className="row1">
				<Col>
					<Card className="cardWelcome">
						<Card.Body>
							Howdy! My name is Miriam and this is my portfolio.
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
							<Card.Text>
								Click on links below to connect.
							</Card.Text>
							<Button variant="Link" href="https://www.linkedin.com/in/miriamtramirez/">LinkedIn</Button>
							<Button variant="Link">TBD</Button>
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
