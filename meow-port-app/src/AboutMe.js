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
					<div className="row" >
						<a className="icon-link" href="https://open.spotify.com/user/mairix3?si=87d58833a2174ee3">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-spotify" viewBox="0 0 16 16">
							<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
						</svg>
						</a>
					</div>
				</div>
			</div>
		{/* Row 2 - CODE FOR CARD GROUP BELOW */}
			<div className="row" >
				<div className="card-group">
					<div className="card">
						{/*<img src="..." className="card-img" alt="cat"/>*/}
						<div className="card-body">
							<h3 className="card-name">Get to know me!</h3>
							<p1>* Hello! My name is Miriam. <br/> I graduated with a Bachelor's of Science in Computer Science and with a minor in Mathematics from the University of Texas at El Paso.<br/>
							I aspire to grow as a web and mobile developer. 
							</p1>
						</div>
					</div>
					<div className="card">
						{/*<img src="..." className="card-img" alt="cat"/>*/}
						<div className="card-body">
							<h3 className="card-name">Interests & Hobbies</h3>
							<p1>
							* Food: I love mushroom ravioli<br/>
							* Color: My favorite color is green<br/>
							* Pets: I have a kitty!<br/>
							* Music: My music taste varies. I LOVE video game OSTs and I also enjoy alt indie, classic rock, and pop.<br/>
							* Video Game: My favorite video game franchise is The Legend of Zelda, but I enjoy playing many other video games such as Genshin Impact, Honkai Star Rail, Animal Crossing, Stardew Valley etc.<br/>
							* Sports: I like to play tennis in my spare time.<br/>
							* Anime: Sailor Moon and Hunter x Hunter are my top 2!
							





							</p1>
						</div>
					</div>
					<div className="card">
						{/* <img src="..." className="card-img" alt="cat"/> */}
						<div className="card-body">
							<h3 className="card-name">TBD</h3>
							<p1>-TBD-</p1>
						</div>
					</div>
				</div>
			</div>

		{/* ROW 3 - CODE FOR CAPTIONS CAROUSEL BELOW */}
			
				<div id="meowriamCarousel" className="carousel slide">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#meowriamCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" ></button>
						<button type="button" data-bs-target="#meowriamCarousel" data-bs-slide-to="1" aria-label="Slide 2" ></button>
						<button type="button" data-bs-target="#meowriamCarousel" data-bs-slide-to="2" aria-label="Slide 3" ></button>
						<button type="button" data-bs-target="#meowriamCarousel" data-bs-slide-to="3" aria-label="Slide 4" ></button>
						<button type="button" data-bs-target="#meowriamCarousel" data-bs-slide-to="4" aria-label="Slide 5" ></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item-active">
							<img src="enter sauce here" className="d-block w-100" alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<h4>First slide</h4>
								<p>......</p>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<img src="enter sauce here" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h4>Second slide</h4>
							<p>......</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src="enter sauce here" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h4>Third slide</h4>
							<p>......</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src="enter sauce here" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h4>Fourth slide</h4>
							<p>......</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src="enter sauce here" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h4>Fifth slide</h4>
							<p>......</p>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#meowriamCarousel" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-targe="#meowriamCarousel" data-bs-slide="next">
					<span className="carousel-control-next" aria-hidden="true"></span>
					<span className="visually-hidden"></span>
				</button>
			</div>
		
	</body>
	);
};

export default AboutMe;
