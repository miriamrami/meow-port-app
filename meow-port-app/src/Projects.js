import { Link } from "react-router-dom";
import "./cssFiles//Projects.css";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

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
				
		</div>
		

	</body>
	);
};

export default Projects;
