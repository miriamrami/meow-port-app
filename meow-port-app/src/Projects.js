import { Link } from "react-router-dom";
import "./cssFiles//Projects.css";
import { Navbar, Nav, Container, Row, Col, Accordion, Image} from "react-bootstrap";
import WA1 from "./Demos/wApp1.png";
import WA2 from "./Demos/wApp2.png";
import WA3 from "./Demos/wApp3.png";
import WA4 from "./Demos/wApp4.png";


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
							<Container>
								<Row>
									<Col>app name </Col>
									<Col>brief description</Col>
								</Row>
								<Row>
									<Col>videos?</Col>
									<Col>
										<Row>
											<Col></Col>
											<Col></Col>
											<Col></Col>
											<Col></Col>
										</Row>
										<Row>
											<Col>
												<Image src={WA1} rounded fluid/>
											</Col>
											<Col>
												<Image src={WA2} rounded fluid/>
											</Col>
											<Col><Image src={WA3} rounded fluid/></Col>
											<Col><Image src={WA4} rounded fluid/></Col>
										</Row>
										<Row>
											<Col></Col>
											<Col></Col>
											<Col></Col>
											<Col></Col>
										</Row>
									</Col>
								</Row>
							</Container>


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
