import React from "react";
import { Link } from "react-router-dom";
import "./cssFiles//AboutMe.css";

const AboutMe = () => {
	return (
	<body>
		<div className="AboutMe">
			<br/>
			<h1>About Me</h1>
			<br/>
			<ul className="nav nav-tabs">
				<li className="nav-item">
					{/* Endpoint to route to Home component */}
					<Link className="nav-link" to="/Home.js">Home</Link>
				</li>
				<li className="nav-item">
					{/* Endpoint to route to About component */}
					<Link className="nav-link active" aria-current="page" to="/AboutMe.js">About Me</Link>
				</li>
				<li className="nav-item">
					{/* Endpoint to route to Home component */}
					<Link className="nav-link" to="/Projects.js">Projects</Link>
				</li>
			</ul>
		</div>
		<div>
		{/* ROW 1 - CODE FOR IMG, NAME & SOCIALS BELOW */}
			<div className="row" >
				<div className="col"><img src={require('./imgs//IMG_7903.jpg')} width={200} height={200} className= "img-fluid" alt=" " /></div>
				<div className="col">
					<div className="row" >
						<h2 className="my-name" >Miriam Ramirez</h2>
					</div>
					<div className="row" >insert socials here?</div>
				</div>
			</div>
		{/* Row 2 - CODE FOR CARD GROUP BELOW */}
			<div className="row" >
				<div className="card-group">
					<div className="card1">
						{/*<img src="..." className="card-img" alt="cat"/>*/}
						<div className="card-body">
							<h3 className="card-name">Get to know me!</h3>
							<p>-Insert info about Miriam here-</p>
						</div>
					</div>
					<div className="card2">
						{/*<img src="..." className="card-img" alt="cat"/>*/}
						<div className="card-body">
							<h3 className="card-name">Interests & Hobbies</h3>
							<p>-Insert Miriam's interests and hobbies here-</p>
						</div>
					</div>
					<div className="card3">
						{/* <img src="..." className="card-img" alt="cat"/> */}
						<div className="card-body">
							<h3 className="card-name">TBD</h3>
							<p>-TBD-</p>
						</div>
					</div>
				</div>
			</div>
		{/* ROW 3 - CODE FOR CAROUSEL BELOW */}
			<div className="row" >

			</div>
		</div>
	</body>
	);
};

export default AboutMe;
