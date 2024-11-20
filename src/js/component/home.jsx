import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Light = ({color, currentColor, setCurrentColor}) => {
	const on = currentColor === color;

	const setColorToCurrentColor = () => {
		setCurrentColor(color);
	}


	return (
		<div onClick={setColorToCurrentColor} className={`light ${color} ${on ? "on" : "off"}`}></div>
	);
}


const TraffictLight = () => {
	let [currentColor, setCurrentColor] = useState("green"); 

	return (
		<div className="trafficlight">
			<Light setCurrentColor={setCurrentColor} color="red" currentColor={currentColor} />
			<Light setCurrentColor={setCurrentColor} color="yellow" currentColor={currentColor} />
			<Light setCurrentColor={setCurrentColor} color="green" currentColor={currentColor} />
		</div>
	); 

}


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5"> 🤚Traffic-Lights!🛸</h1>
			<TraffictLight />
		</div>
	);
};

export default Home;
