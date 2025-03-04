import { Link } from "react-router-dom";
import "./cssFiles//UnderConstruction.css";
import { Navbar, Nav, Container, Row, Col, Accordion, Image, CardText, CardHeader, Card, Spinner} from "react-bootstrap";
import myDrawingImage from "./icons/stoprightmeow.jpg";


const UnderConstruction = () => {

	return (
	<body>
		<div className="UC-background">
		
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
                <Row>
                    <Col>
                        <Image className="imageStop" src={myDrawingImage} roundedCircle fluid/>
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

export default UnderConstruction;