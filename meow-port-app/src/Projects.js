import { Link } from "react-router-dom";
import "./cssFiles//Projects.css";
import { Navbar, Nav, Container, Row, Col, Accordion } from "react-bootstrap";

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
        			<Accordion.Header>Accordion Item #1</Accordion.Header>
        				<Accordion.Body>
							Enter description of info of project here
        				</Accordion.Body>
      			</Accordion.Item>
      			<Accordion.Item eventKey="1">
        			<Accordion.Header>Accordion Item #2</Accordion.Header>
        				<Accordion.Body>
							Project info goes here 
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
