import { Link } from "react-router-dom";
import "./cssFiles//Projects.css";
import { Navbar, Nav, Container, Row, Col, Accordion, Image, CardText, CardHeader, Card} from "react-bootstrap";
import WA1 from "./Demos/wApp1.png";
import WA2 from "./Demos/wApp2.png";
import WA3 from "./Demos/wApp3.png";
import WA4 from "./Demos/wApp4.png";
import WA5 from "./Demos/wApp5.png";
import WA6 from "./Demos/wApp6.png";
import WA7 from "./Demos/wApp7.png";
import WA8 from "./Demos/wApp8.png";
import WA9 from "./Demos/wApp9.png";
import WA1O from "./Demos/wApp1.png";
import WA11 from "./Demos/wApp11.png";
import sImg1 from "./Demos/sketch1.png";
import sImg2 from "./Demos/sketch2.png";
import sImg3 from "./Demos/sketch3.png";


const Projects = () => {

	return (
	<body>
		<div className="ProjectPage">
			<h1></h1>
			<Navbar className="home-nav">
				<Container>
					<Navbar.Brand href="/">:3</Navbar.Brand>
						<Nav className="my-navbar">
							<Link className="nav-link" to="/Home.js">Home</Link>
							<Link className="nav-link" to="/AboutMe.js">About Me</Link>
							<Link className="nav-link active" aria-current="page" to="/Projects.js">Projects</Link>
						</Nav>
				</Container>
			</Navbar>
		<Container>
			<Accordion>
      			<Accordion.Item eventKey="0">
        			<Accordion.Header>Cross Platform Mobile App Development</Accordion.Header>
        				<Accordion.Body>
							<Container>
								<Row>
									<Col>App Name: Gift Me</Col>
									<Col>
										With this application a user should be able to create a list of items that they would like to receive as gifts for any special occasion. Instead of having to go to a store that has a gift registry, people can register items and create boards for any special occasion right from their pocket and share their wish lists with their friends and family.
									</Col>
								</Row>
								<Row>
									<Col>
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
										<Row>
											<Col><Image src={WA8} rounded fluid/></Col>
											<Col><Image src={WA9} rounded fluid/></Col>
											<Col><Image src={WA1O} rounded fluid/></Col>
											<Col><Image src={WA11} rounded fluid/></Col>
										</Row>
										<Row>
											<Col><Image src={WA1} rounded fluid/></Col>
											<Col><Image src={WA2} rounded fluid/></Col>
											<Col><Image src={WA3} rounded fluid/></Col>
											<Col><Image src={WA4} rounded fluid/></Col>
										</Row>
										<Row>
											<Col><Image src={WA5} rounded fluid/></Col>
											<Col><Image src={WA6} rounded fluid/></Col>
											<Col><Image src={WA7} rounded fluid/></Col>
											<Col></Col>
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
											<Card.Link href="https://mtramirez4.wixsite.com/mysite-3">My Cat-licious Website</Card.Link>
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
        				</Accordion.Body>
      			</Accordion.Item>
				  <Accordion.Item eventKey="2">
        			<Accordion.Header>Accordion Item #3</Accordion.Header>
        				<Accordion.Body>
							Enter description of info of project here
        				</Accordion.Body>
      			</Accordion.Item>
      			<Accordion.Item eventKey="3">
        			<Accordion.Header>Accordion Item #4</Accordion.Header>
        				<Accordion.Body>
							Project info goes here 
        				</Accordion.Body>
      			</Accordion.Item>
    		</Accordion>
		</Container>
		</div>
	</body>
	);
};

export default Projects;
