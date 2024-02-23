import React from "react";
import { Link } from "react-router-dom";
import "./cssFiles//Projects.css";

const Projects = () => {

	const myModal = document.getElementById('myModal')
	const myInput = document.getElementById('myInput')

	if(myModal){
		myModal.addEventListener('shown.bs.modal', () => {
			myInput.focus()
		})
	}

	return (
	<body>
		<div className="ProjectPage">
			<h1>Project Showcase</h1>
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
		{/**/}
			<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#resumeModal">
				My Resume!
			</button>

			<div className="modal fade" id="resumeModal" tabIndex="-1" aria-labelledby="resumeModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="resumeModalLabel">Modal Title Here</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
						...
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
							<button type="button" className="btn btn-primary">Download</button>
						</div>

					</div>

				</div>
			</div>
		

	</body>
	);
};

export default Projects;
