import React from "react";
import { Link } from "react-router-dom";
import "./cssFiles//Home.css";
import { Container, Row, Col, Card, Nav, Navbar } from "react-bootstrap";

const Home = () => {
	return (
	<body>
		<div className="home-background">

		<Navbar>
			<Container>
				<Navbar.Brand href="/">:3</Navbar.Brand>
					<Nav className="my-navbar">
						<Link className="nav-link" to="/">Home</Link>
						<Link className="nav-link" to="/AboutMe.js">About Me</Link>
						<Link className="nav-link" to="/Projects.js">Projects</Link>
				</Nav>
			</Container>
		</Navbar>



		<Container fluid>
			<Row className="row1">
				<Col>
					<Card>
						<Card.Body>
							Howdy! I'm Miriam and this is my portfolio.
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
								Let's Connect!
							</Card.Title>
							<Card.Text>
								I've linked my socials so that we can stay in touch 
							</Card.Text>
							<></>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
		<Container fluid>
			<Row className="row3">
				<Col>
					Implement footer here
				</Col>
			</Row>
		</Container>
		</div>
	</body>
	);
};

export default Home;
