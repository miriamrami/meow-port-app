import { Link } from "react-router-dom";
import "./cssFiles//Projects.css";

const Projects = () => {

	return (
	<body>
		<div className="ProjectPage">
			<h1></h1>
			<ul className="nav nav-tabs">
				<li className="nav-item">
					{/* Endpoint to route to Home component */}
					<Link className="nav-link" to="/Home.js">Home</Link>
				</li>
				<li className="nav-item">
					{/* Endpoint to route to About component */}
					<Link className="nav-link" to="/AboutMe.js">About Me</Link>
				</li>
				<li className="nav-item">
					{/* Endpoint to route to Home component */}
					<Link className="nav-link active" aria-current="page" to="/Projects.js">Projects</Link>
				</li>
			</ul>
		</div>
		

	</body>
	);
};

export default Projects;
