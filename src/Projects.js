import { Link } from "react-router-dom";
import React, {useState} from 'react';
import "./cssFiles//Projects.css";
import { Navbar, Nav, Container, Row, Col, Accordion, Image, CardText, CardHeader, Card, Spinner, Modal, Button, CardBody} from "react-bootstrap";
import WA1 from "./DemoImages/wApp1.png";
import WA2 from "./DemoImages/wApp2.png";
import WA3 from "./DemoImages/wApp3.png";
import WA4 from "./DemoImages/wApp4.png";
import WA5 from "./DemoImages/wApp5.png";
import WA6 from "./DemoImages/wApp6.png";
import WA7 from "./DemoImages/wApp7.png";
import WA8 from "./DemoImages/wApp8.png";
import WA9 from "./DemoImages/wApp9.png";
import WA1O from "./DemoImages/wApp1O.png";
import WA11 from "./DemoImages/wApp11.png";
import sImg1 from "./DemoImages/sketch1.png";
import sImg2 from "./DemoImages/sketch2.png";
import sImg3 from "./DemoImages/sketch3.png";
import wp1 from "./DemoImages/web1.jpg";
import wp2 from "./DemoImages/web2.jpg";
import wp3 from "./DemoImages/web3.jpg";
import wp4 from "./DemoImages/web4.jpg";
import d1 from "./DemoClips/successfulsignin.mp4";
import d2 from "./DemoClips/passwordreset.mp4";
import d3 from "./DemoClips/emailinuse.mp4";
import d4 from "./DemoClips/mainmenuboards.mp4";
import d5 from "./DemoClips/creatingboard.mp4";
import d6 from "./DemoClips/wishlistpreview.mp4";


const Projects = () => {

	const [showModal, setShowModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageClick = (image) => {
		setSelectedImage(image);
		setShowModal(true);
	}

	const handleCloseModal = () => {
		setShowModal(false);
		setSelectedImage(null);
	}

	return (
	<body>
		<div className="projects-div">
		
			<Navbar sticky="top" className="home-nav">
				<Container>
					<Navbar.Brand href="/">=^-w-^=</Navbar.Brand>
						<Nav className="nav-tabs">
							<Link className="nav-link" to="/Home.js">Home</Link>
							<Link className="nav-link" to="/AboutMe.js">About Me</Link>
							<Link className="nav-link active" aria-current="page" to="/Projects.js">Projects</Link>
						</Nav>
				</Container>
			</Navbar>

		<Container className="accordion-container">
			<Accordion className="accordionComponent">
      			<Accordion.Item eventKey="0">
        			<Accordion.Header>Cross Platform Mobile App Development</Accordion.Header>
        				<Accordion.Body>
							<Container>
								<h2>App Name: Gift Me</h2>
								<Row>
									<Col>
										<Container className="app-description-container">
											<p>
												Created a Flutter app from scratch with Firebase integration for user authentication, enabling secure storage and management of user data. Developed a wish list application allowing users to create, populate, and share wish lists for special occasions such as birthdays, weddings, and college departures. 
											</p>
										</Container>
									</Col>
								</Row>
								<Row>
									<Col>
											<h2>Sketches</h2>
										<Row>
											<Col><Image src={sImg1} rounded fluid onClick={() => handleImageClick(sImg1)} style={{cursor: 'pointer'}}/> </Col>
										</Row>
										<Row>
											<Col><Image src={sImg2} rounded fluid onClick={() => handleImageClick(sImg2)} style={{cursor: 'pointer'}}/></Col>
										</Row>
										<Row>
											<Col><Image src={sImg3} rounded fluid onClick={() => handleImageClick()} style={{cursor: 'pointer'}}/></Col>
										</Row>
									</Col>
									<Col>
													<h2>App Demo Screenshots</h2>
										<Row>
											<Col><Image src={WA8} rounded fluid onClick={() => handleImageClick()} style={{cursor: 'pointer'}}/></Col>
											<Col><Image src={WA9} rounded fluid onClick={() => handleImageClick()} style={{cursor: 'pointer'}}/></Col>											
										</Row>
										<Row>
											<Col><Image src={WA6} rounded fluid onClick={() => handleImageClick()} style={{cursor: 'pointer'}}/></Col>
											<Col><Image src={WA7} rounded fluid onClick={() => handleImageClick()} style={{cursor: 'pointer'}}/></Col>
											
										</Row>
									</Col>
									<Row>
											<Row>
												<Container>
													<h2>App Demos</h2>
												</Container>
											</Row>
										<Col>
											<Container>
												<video
                  									src={d1}
                  									controls
                  									style={{ width: '100%', borderRadius: '10px' }}
                								/>
												<Card>
													<CardBody>
														User encounters 'Welcome' message when manages to successfully sign up.
													</CardBody>
												</Card>
											</Container>
										</Col>
										<Col>
											<Container>
												<video
                  									src={d2} 
                  									controls
                  									style={{ width: '100%', borderRadius: '10px' }}
                								/>
												<Card>
													<CardBody>
														User resetting password; obtaining confirmation window.
													</CardBody>
												</Card>
											</Container>
										</Col>
										<Col>
											<Container>
													<video
                  									src={d3}
                  									controls
                  									style={{ width: '100%', borderRadius: '10px' }}
                								/>
												<Card>
													<CardBody>
														User thrown an error when trying to use an email that has already been used to sign up.
													</CardBody>
												</Card>
												
											</Container>
										</Col>
										
									</Row>
									<Row>
										
									</Row>
								</Row>
							</Container>
        				</Accordion.Body>
						
      			</Accordion.Item>
      			<Accordion.Item eventKey="1">
        			<Accordion.Header>WIX Web Page</Accordion.Header>
        				<Accordion.Body>
							<Row>
								<Col>
									<Card>
										<Card.Body>
											<CardHeader>Click the link below to check out my project!</CardHeader>
											<CardText></CardText>
											<Card.Link href="https://mtramirez4.wixsite.com/mysite-3" target="_blank">My Cat-licious Website</Card.Link>
										</Card.Body>
									</Card>
								</Col>
								<Col>
									<Card>
										<Card.Body>
											<CardText> This WIX website was a project that I had to create during my freshman year of college for my Rhetoric & Writing Studies course.</CardText>
										</Card.Body>
									</Card>
								</Col>
							</Row>
							<Row>
								<Card>
									<Card.Body>
										<Card.Text >Screencaptures of the WIX Website </Card.Text>
									</Card.Body>
								</Card>
								<Col><Image src={wp1} rounded fluid onClick={() => handleImageClick()} style={{cursor: 'pointer'}}/></Col>
								<Col><Image src={wp2} rounded fluid onClick={() => handleImageClick()} style={{cursor: 'pointer'}}/></Col>
								<Col><Image src={wp3} rounded fluid onClick={() => handleImageClick()} style={{cursor: 'pointer'}}/></Col>
								<Col><Image src={wp4} rounded fluid onClick={() => handleImageClick()} style={{cursor: 'pointer'}}/></Col>
							</Row>
        				</Accordion.Body>
      			</Accordion.Item>
				  <Accordion.Item eventKey="2">
        			<Accordion.Header>Portfolio Website</Accordion.Header>
        				<Accordion.Body>
							<Spinner animation="grow" variant="info" size="sm"/>
							Work in progress  
							<Spinner animation="grow" variant="info" size="sm"/>
        				</Accordion.Body>
      			</Accordion.Item>
      			<Accordion.Item eventKey="3">
        			<Accordion.Header>Project #4</Accordion.Header>
        				<Accordion.Body>
							<Spinner animation="grow" variant="info" size="sm"/>
							Work in progress  
							<Spinner animation="grow" variant="info" size="sm" />
        				</Accordion.Body>
      			</Accordion.Item>
    		</Accordion>

		<Modal show={showModal} onHide={handleCloseModal} centered>
			<Modal.Body>
				{selectedImage && <Image src={selectedImage} fluid/>}
			</Modal.Body>
		</Modal>

		</Container>

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

export default Projects;
