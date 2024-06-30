import React, { useState } from "react";

const intialLightColors = ["red", "yellow", "green"];

const Home = () => {
	
	const [lightColors, setLightColors] = useState(intialLightColors);
	const [lightColor, setLightColor] = useState("red");

	const cycleLightColor = () => {
		if (lightColor === "red") {
			setLightColor("yellow") 
		}
		if (lightColor === "yellow") {
			setLightColor ("green") 
		}
		if (lightColor === "green" && lightColors.includes("purple")) {
			setLightColor ("purple")
		}
		if (lightColor ==="green" && !lightColors.includes("purple") || lightColor === "purple") {
			setLightColor ("red")
		}		
	};	

	const addPurpleLight = () => {
		if (lightColors.includes("purple")) {
			setLightColors(["red", "yellow", "green"])
		} else {
			setLightColors([...lightColors, "purple"])
		}
	};

	return (
		<div className="container">
			<div className="stand"></div>
			<div className="trafficBox">
				<div onClick={() => setLightColor("red")} className={"redLight light " + (lightColor === "red" ? "lightColorRed" : "")}></div>
				<div onClick={() => setLightColor("yellow")} className={"yellowLight light " + (lightColor === "yellow" ? "lightColorYellow" : "")}></div>
				<div onClick={() => setLightColor("green")} className={"greenLight light " + (lightColor === "green" ? "lightColorGreen" : "")}></div>
				{lightColors.includes("purple") && (
					<div onClick={() => setLightColor("purple")} className={"purpleLight light " + (lightColor === "purple" ? "lightColorPurple" : "")}></div>
				)}
			</div>
			<div>
				<button className="btn mt-5 btn-danger" onClick={addPurpleLight}>Add/Remove Purple</button>
				<button className="btn mt-5 btn-danger" onClick={cycleLightColor}>Next Color</button>
			</div>
		</div>
	)
};
	
export default Home;
