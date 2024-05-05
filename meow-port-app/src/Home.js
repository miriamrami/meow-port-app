import React from "react";
import { Link } from "react-router-dom";
import "./cssFiles//Home.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
	return (
	<body>
		<div className = "home-nav">
			<h1> </h1>
			<ul className="nav nav-tabs">
				<li className="nav-item">
					{/* Endpoint to route to Home component */}
					<Link className="nav-link active" aria-current="page" to="/">Home</Link>
				</li>
				<li className="nav-item">
					{/* Endpoint to route to About component */}
					<Link className="nav-link" to="/AboutMe.js">About Me</Link>
				</li>
				<li className="nav-item">
					{/* Endpoint to route to Project component */}
					<Link className="nav-link" to="/Projects.js">Projects</Link>
				</li>
			</ul> {/**nav nav-tabs */}
		</div>
		<div className="home-background">

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
