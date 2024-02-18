import React from "react";
import { Link } from "react-router-dom";
import "./cssFiles//AboutMe.css";

const AboutMe = () => {
	return (
	<body>
		<div className="AboutMe">
			<h1>About Me</h1>
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
				<div className="col">
					<img src={require('./imgs//IMG_7903.jpg')} width={300} height={300} className= "img-fluid" alt=" " />
				</div>
				<div className="col">
					<div className="row" >
						<h2 className="MyName" >Miriam Ramirez</h2>
					</div>
					<div className="row" >insert socials here?</div>
				</div>
			</div>
		{/* Row 2 - CODE FOR CARD GROUP BELOW */}
			<div className="row" >
				<div className="card-group">
					<div className="card">
						{/*<img src="..." className="card-img" alt="cat"/>*/}
						<div className="card-body">
							<h3 className="card-name">Get to know me!</h3>
							<p>Hello! My name is Miriam. <br/> I graduated with a Bachelor's of Science in Computer Science and with a minor in Mathematics from the University of Texas at El Paso.<br/>
							I aspire to grow as a web and mobile developer. 
							</p>
						</div>
					</div>
					<div className="card">
						{/*<img src="..." className="card-img" alt="cat"/>*/}
						<div className="card-body">
							<h3 className="card-name">Interests & Hobbies</h3>
							<p>
							* I love mushroom ravioli<br/>
							* My favorite color is green<br/>
							* I have a kitty!<br/>
							* My favorite video game franchise is The Legend of Zelda, but I enjoy playing many other video games such as Genshin Impact, Honkai Star Rail, Animal Crossing, etc.<br/>
							* I like to play tennis in my spare time
							





							</p>
						</div>
					</div>
					<div className="card">
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
