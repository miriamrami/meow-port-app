import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Row, Col, Carousel, Image, Card, CardBody, CardText, Button, CardTitle, Modal } from "react-bootstrap";
import "./cssFiles//AboutMe.css";

const AboutMe = () => {

	const [showModal, setShowModal] = useState(false);
	const [modalTitle, setModalTitle] = useState("");
	const [modalContent, setModalContent] = useState("");

	const handleShowModal = (title, content) => {
		setModalTitle(title);
		setModalContent(content);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const workExperienceTable = (
		<table>
			<thead>
				<tr>
					<th>Company</th>
					<th>Job Title</th>
					<th>Duration</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Neurodiagnostics Medical P.C.</td>
					<td>Front Desk Secretary</td>
					<td>Aug 2024 - Current</td>
				</tr>
				<tr>
					<td>GU</td>
					<td>Retail Associate</td>
					<td>Nov 2024 - Current</td>
				</tr>
				<tr>
					<td>PACSUN</td>
					<td>Retail Associate</td>
					<td>Aug 2023 - Aug 2024</td>
				</tr>
				<tr>
					<td>Scribe America</td>
					<td>Remote Scribe</td>
					<td>Aug 2023 - Aug 2024</td>
				</tr>
				<tr>
					<td>Code Ninjas</td>
					<td>Coding Instructor</td>
					<td>Dec 2021 - April 2022</td>
				</tr>
				<tr>
					<td>Bed Bath & Beyond</td>
					<td>Retail Associate</td>
					<td>Jan 2022 - May 2022</td>
				</tr>
				<tr>
					<td>UTEP Technology Support</td>
					<td>Undergraduate Student Assistant</td>
					<td>Aug 2018 - Aug 2023</td>
				</tr>
			</tbody>
		</table>
	);

	return (
	<body>
		<div className="AM-div">
		<Navbar sticky="top" className="home-nav">
			<Container>
				<Navbar.Brand href="/">=^-w-^=</Navbar.Brand>
					<Nav className="nav-tabs">
						<Link className="nav-link" to="/">Home</Link>
						<Link className="nav-link active" aria-current="page" to="/AboutMe.js">About Me</Link>
						<Link className="nav-link" to="/Projects.js">Projects</Link>
				</Nav>
			</Container>
		</Navbar>

		<Container className="about-me-title-container">
					<h1>More About Me... </h1>
		</Container>

		<Container className="first-AM-container">
			<Row className="top-row">
				<Col className="col-one">
					<Container className="education-card-container">
						<Card className="eduCard" onClick={() => handleShowModal("Education", "Graduated from The University of Texas at El Paso with a Bachelor's of Science in Computer Science and a minor in Mathematics.")}>
							<i className="bi-book"></i>
							Education
						</Card>
					</Container>
				</Col>
				<Col>
					<Container className="background-card-container">
						<Card className="bgCard" onClick={() => handleShowModal("Background","I was born in Ciudad Juarez, Chihuahua, Mexico. Later, at four years old, I moved to El Paso, Texas with my parents and my older brothers where I remained until graduating college.")}>
							<i className="bi-globe"></i>
							Background
						</Card>
					</Container>
				</Col>
				<Col>
					<Container className="work-card-container">
						<Card className="workCard" onClick={() => handleShowModal("Work Experience", workExperienceTable)}>
						<i className="bi-pc-display-horizontal"></i>
						Work Experience
						</Card>
					</Container>
				</Col>
			</Row>
		</Container>

		<Container className="second-AM-container">
			<Row>
			<Col className="col-two">
					<Container className="hobbies-card-container">
						<Card className="hobbiesCard" onClick={() => handleShowModal("Hobbies","I like to read or play video games! My favorite video game franchise is The Legend of Zelda!")}>
						<i className="bi-controller"></i>
						Hobbies
						</Card>
					</Container>
				</Col>
				<Col>
					<Container className="gallery-card-container">
						<Card className="galleryCard" onClick={() => handleShowModal("Gallery","*Work in Progress*")}>
						<i className="bi-camera"></i>
						Gallery
						</Card>
					</Container>
				</Col>
				<Col>
					<Container>
						<Card className="igCard">
						<Button variant="danger" href="https://www.instagram.com/_meowriam_/" target="_blank"><i className="bi-instagram"></i></Button>
						Instagram
						</Card>
					</Container>
				</Col>
			</Row>
		</Container>

		<Container className="third-AM-container">
			<Row>
			<Col className="col-three">
					<Container>
						<Card className="spotifyCard">
						<Button variant="success" href="https://open.spotify.com/user/mairix3?si=a4411d782b4144c4" target="_blank"><i className="bi-spotify"></i></Button>
						Spotify
						</Card>
					</Container>
				</Col>
				<Col>
					<Container>
						<Card className="steamCard">
						<Button variant="dark" href="https://steamcommunity.com/id/11151999/" target="_blank"><i className="bi-steam"></i></Button>
						Steam
						</Card>
					</Container>
				</Col>
				<Col>
					<Container>
						<Card className="liCard">
						<Button variant="info" href="https://www.linkedin.com/in/miriamtramirez/" target="_blank"><i className="bi-linkedin"></i></Button>
						LinkedIn
						</Card>
					</Container>
				</Col>
			</Row>
		</Container>

		<Modal show={showModal} onHide={handleCloseModal}>
			<Modal.Header closeButton>
          		<Modal.Title>{modalTitle}</Modal.Title>
        	</Modal.Header>
        	<Modal.Body>{modalContent}</Modal.Body>
        <Modal.Footer></Modal.Footer>
		</Modal>


		{/* COMMENTING OUT 
		<Container className="c1">
			<Row className="AM-row1">
				<Col className="miriamImage">
					<Image src={myImage} roundedCircle fluid/>
				</Col>

				<Col className="nameInfoCol">
					<Card className="nameCard">
						<CardBody>
							<CardText className="nameCardText">Miriam T Ramirez</CardText>
						</CardBody>
					</Card>
					<Card className="emailCard">
						<CardBody>
							<CardText className="emailText">e-mail: miriamteresaram@gmail.com</CardText>
						</CardBody>
					</Card>
				</Col>

				</Row>
		</Container>
				*/}
			

		{/*COMMENTING OUT FIRST 
		<Container className="c2">
			<Row className="AM-row2">
				<Col>
					<Card className="bioTitleCard">
						<CardBody>
							<CardTitle className="bioTitle">A Little About Me</CardTitle>
						</CardBody>
					</Card>
					<Card className="bioParagraphCard">
						<CardBody>
							<Card.Text>
							Hello! My name is Miriam Ramirez and I was born in Ciudad Juarez, Chihuaha but I was raised in El Paso, Texas. I graduated from the University of Texas at El Paso with a Bachelor's of Science in Computer Science and with a minor in Mathematics.
							</Card.Text>
							<Card.Text>
							I have a strong passion for software development, particularly in areas such as web development, data analysis, and mobile app development. I am proficient in several programming languages including Java, PHP, HTML, C, Dart, Javascript, CSS and Python. My experience extends to various frameworks such as React Native, React Bootstrap, Flutter and Bootstrap.
							</Card.Text>
							<Card.Text>
							In terms of methodologies and practices, I am well versed in Agile, Sprint Planning and the Personal Software Process, which I apply to ensure efficient and high quality development processes. 
							</Card.Text>
							<Card.Text>My current goal is to gain hands-on experience in the tech industry and contribute to innovative projects. I aspire to become a web developer and software engineer, creating impactful and efficient web applications and software solutions.</Card.Text>
							<Card.Text> Feel free to connect with me on LinkedIn or reach out via email.</Card.Text>
						</CardBody>
					</Card>
				</Col>
				
				<Col>
				<Image src="" roundedCircle fluid/>
				</Col>
			</Row>
		</Container>
		*/}

		<Container className="footer-container"fluid>
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

export default AboutMe;
