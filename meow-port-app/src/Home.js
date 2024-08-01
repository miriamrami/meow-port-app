import React from "react";
import { Link } from "react-router-dom";
import "./cssFiles//Home.css";
import { Container, Row, Col, Card, Nav, Navbar, Button, ListGroup } from "react-bootstrap";
import ghcImg from "./imgs/miriamAtGHC.jpg";

const Home = () => {
	return (
	<body>
		<div className="home-background">

		<Navbar sticky="top" className="home-nav">
			<Container>
				<Navbar.Brand href="/">=^-w-^=</Navbar.Brand>
					<Nav className="nav-tabs">
						<Link className="nav-link active" aria-current="page" to="/">Home</Link>
						<Link className="nav-link" to="/AboutMe.js">About Me</Link>
						<Link className="nav-link" to="/Projects.js">Projects</Link>
				</Nav>
			</Container>
		</Navbar>

		<Container className="myNameContainer">
			<Row>
				<Col>
					<h1 className="nameHeader">Miriam Ramirez</h1>
				</Col>
			</Row>
		</Container>

		<Container fluid>
			<Row className="row1">
				<Col>
					<Container>
					<Card className="cardWelcome">
						<Card.Img variant="top" src={ghcImg} rounded fluid />
						<Card.Body>
							<Card.Text>Me at the 2019 Grace Hopper Conference held in Orlando, Florida.</Card.Text>
						</Card.Body>
					</Card>
					</Container>
				</Col>
			</Row>
		</Container>

		<Container>
			<Row className="row1">
				<Col>
					<Container>
							<Card className="techStackCard">
								<Card.Body>
									<Card.Title className="tsTitle">Tech Stack</Card.Title>
									<Card.Text>
									<ListGroup as="ol">
      									<ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        									<div className="ms-2 me-auto">
          										<div className="fw-bold">Programming Languages</div>
												Java, PHP, HTML, C, Dart, Javascript, CSS, Python
											</div>
      									</ListGroup.Item>
      									<ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        									<div className="ms-2 me-auto">
          										<div className="fw-bold">Frameworks</div>
          										React Native, React Bootstrap, Flutter Bootstrap
        									</div>
      									</ListGroup.Item>
										  <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        									<div className="ms-2 me-auto">
          										<div className="fw-bold">Methodologies & Practices</div>
          										Agile, Sprint Planning, Personal Software Process
        									</div>
      									</ListGroup.Item>
    								</ListGroup>
									</Card.Text>
								</Card.Body>
							</Card>
					</Container>
				</Col>
				<Col>
					ENTER A COMMENT SECTION HERE
				</Col>
			</Row>
		</Container>


		
		<Container className="footerContainer"fluid>
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
