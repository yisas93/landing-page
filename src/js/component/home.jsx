import React from "react";
import Navbar from "./navbar.jsx";
//include images into your bundle
import Card from "./card.jsx";
import Cards,{Card2, Card3, Card4} from "./rendercards.jsx"

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar/>
			<div id="updiv"><h1>Welcome to the landing page</h1></div>
			<div className="container" id="cardholder">
				<div className="row">
					<div className="col"><Card2></Card2></div>
					<div className="col"><Cards></Cards></div>
					<div className="col"><Card3></Card3></div>
					<div className="col"><Card4></Card4></div>
				</div>
			</div>
			
			
		</div>
	);
};

export default Home;
