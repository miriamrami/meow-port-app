import { Link } from "react-router-dom";
import "./cssFiles//Projects.css";
import { Navbar, Nav, Container, Row, Col, Accordion, Image, CardText, CardHeader, Card, Spinner} from "react-bootstrap";
import WA1 from "./Demos/wApp1.png";
import WA2 from "./Demos/wApp2.png";
import WA3 from "./Demos/wApp3.png";
import WA4 from "./Demos/wApp4.png";
import WA5 from "./Demos/wApp5.png";
import WA6 from "./Demos/wApp6.png";
import WA7 from "./Demos/wApp7.png";
import WA8 from "./Demos/wApp8.png";
import WA9 from "./Demos/wApp9.png";
import WA1O from "./Demos/wApp1O.png";
import WA11 from "./Demos/wApp11.png";
import sImg1 from "./Demos/sketch1.png";
import sImg2 from "./Demos/sketch2.png";
import sImg3 from "./Demos/sketch3.png";
import wp1 from "./Demos/web1.jpg";
import wp2 from "./Demos/web2.jpg";
import wp3 from "./Demos/web3.jpg";
import wp4 from "./Demos/web4.jpg";


const Projects = () => {

	return (
	<body>
		<div className="home-background">
		
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
		<Container>
			<Accordion className="accordionComponent">
      			<Accordion.Item eventKey="0">
        			<Accordion.Header>Cross Platform Mobile App Development</Accordion.Header>
        				<Accordion.Body>
							<Container>
								<Row>
									<Col>
										<Card>
											<Card.Body>
												<Card.Text>
													App Name: Gift Me
												</Card.Text>
											</Card.Body>
										</Card>
									</Col>
									<Col>
										<Card>
											<Card.Body>
												<Card.Text>
												Created a Flutter app from scratch with Firebase integration for user authentication, enabling secure storage and management of user data. Developed a wish list application allowing users to create, populate, and share wish lists for special occasions such as birthdays, weddings, and college departures. 
												</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								</Row>
								<Row>
									<Col>
											<Card>
												<Card.Body>
													<Card.Text>App Early Sketches</Card.Text>
												</Card.Body>
											</Card>
										<Row>
											<Col><Image src={sImg1} rounded fluid/></Col>
										</Row>
										<Row>
											<Col><Image src={sImg2} rounded fluid/></Col>
										</Row>
										<Row>
											<Col><Image src={sImg3} rounded fluid/></Col>
										</Row>
									</Col>
									<Col>
											<Card>
												<Card.Body>
													<Card.Text>App Demo Screenshots</Card.Text>
												</Card.Body>
											</Card>
										<Row>
											<Col><Image src={WA8} rounded fluid/></Col>
											<Col><Image src={WA9} rounded fluid/></Col>
											<Col><Image src={WA1O} rounded fluid/></Col>
											
										</Row>
										<Row>
											<Col><Image src={WA1} rounded fluid/></Col>
											<Col><Image src={WA2} rounded fluid/></Col>
											<Col><Image src={WA3} rounded fluid/></Col>
											
										</Row>
										<Row>
											<Col><Image src={WA5} rounded fluid/></Col>
											<Col><Image src={WA6} rounded fluid/></Col>
											<Col><Image src={WA7} rounded fluid/></Col>
											
										</Row>
									</Col>
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
								<Col><Image src={wp1} rounded fluid/></Col>
								<Col><Image src={wp2} rounded fluid/></Col>
								<Col><Image src={wp3} rounded fluid/></Col>
								<Col><Image src={wp4} rounded fluid/></Col>
							</Row>
        				</Accordion.Body>
      			</Accordion.Item>
				  <Accordion.Item eventKey="2">
        			<Accordion.Header>Project #3</Accordion.Header>
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

export default Projects;
