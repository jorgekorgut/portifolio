import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './lines.css';
import './grid.css';
import './rules.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
  useNavigate,
  Navigate
} from "react-router-dom";

import {
	About
} from "./About.js";

function Button(props){
	let classes = "button_nav "+props.name;

	if(props.highlight != undefined){
		if(props.highlight === props.name)
		{
			classes += " highlight";
		}
	}

	return ( 
		<Link to={"/"+props.name} id={"button_"+props.name} className={classes}>
			<img src={require('./res/'+props.name+'_icon.png')}/>
			<div>{props.text}</div>	
		</Link>	
	);
}

export function Navigation(props){
	return (
		<div className="container_header">
			<nav id="nav_buttons" className="nav_buttons">
				<Button name="about" text="About me" highlight={props.highlight}/>
				<Button name="experience" text="Experience" highlight={props.highlight}/>
				<Button name="projects" text="Projects" highlight={props.highlight}/>
				<Button name="contact" text="Contact" highlight={props.highlight}/>
			</nav>
		</div>
	);
}

function CV(props){
	return (
		<div id="window_cv" className="window window_about">
			<img src={require("./res/pdf_icon.png")}/>
			<div id="information_cv">
				Curriculum Vitae <br/>
				<div id="date_upload_cv">
					06/07/2022
				</div>
			</div>
		</div>
	);
}

function ResearchBar(props){
	return(
			<div id="research_bar" className="row">
				<input type="text" placeholder="Research"></input>
				<img src={require("./res/search_icon.png")}/>
			</div>
	);
}

function ItemList(props){
	return (
		<div id="container_list">
			<ul id="list_projects">
				<li>[JAVA] <strong> Sum.io</strong></li>
				<li>[JAVA][HTML][JS] [CSS] <strong>Reactif</strong></li>
				<li>[JS][ThreeJS] <strong>ConscientWorld</strong></li>
				<li>[C#][SQL][Flutter] <strong>Tingo</strong></li>
				<li>[React]<strong>Portifolio</strong></li>
			</ul>
		</div>
	);
}

function Experience(props){
	return (
		<div id="window_experience" className="window window_experience">
			<div id="interaction_experience">
				<button>Exp Click!</button>
				+1 Skill Wanted
			</div>
			<ul>
				<li>[JAVA] = 150 W</li>
				<li>[C++] = 278 W</li>
				<li>[C#] = 398</li>
				<li>[FLUTTER] = 12</li>
			</ul>
		</div>
	);
}

function Projects(props){
	return(
		<div id="window_projects" className="window window_projects">
			<ResearchBar/>
			<ItemList/>
		</div>
	);
}


function Contact(props){
	return(
		<div id="window_contact" className="window window_contact_me">
			<div className="row">
				<input type="text" placeholder="Send me Hi!" maxLength="3"></input>
				<img src={require("./res/email_icon.png")}/>
			</div>
			<div className="information_contact">
				<div id = "cellphone"> 
					+33 07 53 06 14 50
				</div>
				<div id = "email">jorge.korgut-junior@insa-lyon.fr</div>
			</div>
		</div>
	);
}

function IndexWindows(props){
	return (
		<div className="container">
			<div className="line experience_line_1"></div>
			<div className="line experience_line_2"></div>
			<Contact/>
			<div className="line contact_line_1 contact_back_color"></div>
			<div className="line contact_line_2 contact_back_color"></div>
			<div className="line contact_line_3 contact_back_color"></div>
			<div className="line contact_line_4 contact_back_color"></div>
			<div className="line window_contact_me"></div>
			<div className="line projects_line_1 "></div>
			<div className="line projects_line_2"></div>
			<div className="line projects_line_3"></div>
			<div className="line projects_line_4"></div>
			<div className="line experience_line_3"></div>
			<div className="line experience_line_4"></div>
			<div className="line about_line_1"></div>
			<Projects/>
			<Experience/>
			<CV/>
		</div>
	);
}

function Portifolio(props){
	return (
		<div>
			<Navigation/>
			<IndexWindows/>
		</div>
	);
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Portifolio/>}/>
			<Route path="about" element={<About/>}/>	
		</Routes>
	</BrowserRouter>
);
