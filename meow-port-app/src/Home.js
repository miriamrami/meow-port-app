import React from "react";
import { Link } from "react-router-dom";
import "./cssFiles//Home.css";
import { Container, Row, Col, Card, Nav, Navbar, Button, ListGroup, Accordion, ListGroupItem} from "react-bootstrap";
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
			<Row className="row2">
				<Col>
					<Container>
							<Card className="techStackCard">
								<Card.Body>
									<Card.Title className="tsTitle">Tech Stack</Card.Title>
									<Card.Text>
									<ListGroup as="ol">
      									<ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        									<div className="ms-2 me-auto">
											<Accordion>
    											<Accordion.Item eventKey="0">
        											<Accordion.Header>Programming Languages</Accordion.Header>
        												<Accordion.Body>
														<ul>
              												<li>Python
																<i className="bi-star-fill"></i>
																<i className="bi-star-fill"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
															</li>
              												<li>Java
															 	<i className="bi-star-fill"></i>
																<i className="bi-star-fill"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
															</li>
              												<li>Dart
															  	<i className="bi-star-fill"></i>
																<i className="bi-star-fill"></i>
																<i className="bi-star-fill"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
															</li>
              												<li>HTML
															  	<i className="bi-star-fill"></i>
																<i className="bi-star-fill"></i>
																<i className="bi-star-fill"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
															</li>
              												<li>JavaScript
															  	<i className="bi-star-fill"></i>
																<i className="bi-star-fill"></i>
																<i className="bi-star-fill"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
															</li>
              												<li>TypeScript
															  	<i className="bi-star-fill"></i>
																<i className="bi-star-fill"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
															</li>
              												<li>CSS
															  	<i className="bi-star-fill"></i>
																<i className="bi-star-fill"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
															</li>
              												<li>PHP
															  <i className="bi-star-fill"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
															</li>
              												<li>SQL
																<i className="bi-star-fill"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
																<i className="bi-star"></i>
															</li>
            											</ul>
        												</Accordion.Body>
												</Accordion.Item>
											</Accordion>
											</div>
      									</ListGroup.Item>
      									<ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        									<div className="ms-2 me-auto">
											<Accordion >
    											<Accordion.Item eventKey="1">
        											<Accordion.Header>Frameworks</Accordion.Header>
        												<Accordion.Body>
														<ul>
              												<li>React Native</li>
              												<li>React Native</li>
              												<li>Flutter Bootstrap</li>
            											</ul>
        												</Accordion.Body>
												</Accordion.Item>
											</Accordion>
        									</div>
      									</ListGroup.Item>
										  <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
        									<div className="ms-2 me-auto">
											<Accordion >
    											<Accordion.Item eventKey="2">
        											<Accordion.Header>Methodologies and Practices</Accordion.Header>
        												<Accordion.Body>
														<ul>
              												<li>Agile</li>
              												<li>Aprint Planning</li>
              												<li>Personal Software Process</li>
            											</ul>
        												</Accordion.Body>
												</Accordion.Item>
											</Accordion>
        									</div>
      									</ListGroup.Item>
    								</ListGroup>
									</Card.Text>
								</Card.Body>
							</Card>
					</Container>
				</Col>
				<Col>
					[Work in Progress]
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
