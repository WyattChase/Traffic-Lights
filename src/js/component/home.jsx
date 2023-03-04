import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [ Color, setColor ] = useState("");

  return (
	<><div className="traffic-top"> </div><div className="traffic-light">
		  <div className="container">
			  <div
				  onClick={() => setColor("red")}
				  className={"light red" + (Color === "red" ? " glow" : "")}
			  >
			  </div>
			  <div
				  onClick={() => setColor("yellow")}
				  className={"light yellow" + (Color === "yellow" ? " glow" : "")}
			  >
			  </div>
			  <div
				  onClick={() => setColor("green")}
				  className={"light green" + (Color === "green" ? " glow" : "")}
			  >
			  </div>
		  </div>
	  </div></>
  );
};

export default Home;
